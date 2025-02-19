import { describe, expect, it } from "vitest";

import { dataArrayToCSV, flattenSimpleObject } from "./csv-export.ts";

describe("flattenSimpleObject", () => {
  it("flattens nested objects", () => {
    const input = {
      name: "John",
      age: 30,
      contact: {
        email: "john@example.com",
        phone: {
          home: "123-456",
          work: "789-012",
        },
      },
      isActive: true,
    };

    const expected = {
      name: "John",
      age: 30,
      "contact.email": "john@example.com",
      "contact.phone.home": "123-456",
      "contact.phone.work": "789-012",
      isActive: true,
    };

    expect(flattenSimpleObject(input)).toEqual(expected);
  });

  it("handles null and undefined values", () => {
    const input = {
      name: "John",
      age: null,
      contact: {
        email: undefined,
        phone: null,
      },
      isActive: true,
    };

    const expected = {
      name: "John",
      age: null,
      "contact.email": undefined,
      "contact.phone": null,
      isActive: true,
    };

    expect(flattenSimpleObject(input)).toEqual(expected);
  });
});

describe("dataArrayToCSV", () => {
  it("generates CSV with simple headers and data", () => {
    const data = [
      { name: "John", age: 30, isActive: true, city: "New York" },
      { name: "Jane", age: 25, isActive: false, city: "Los Angeles" },
    ];
    const headers = ["name", "age", "isActive"];

    const expected = "name,age,isActive\nJohn,30,true\nJane,25,false";

    expect(dataArrayToCSV(data, headers)).toBe(expected);
  });

  it("handles headers with keys and labels", () => {
    const data = [
      { name: "John", age: 30, isActive: true, city: "New York" },
      { name: "Jane", age: 25, isActive: false, city: "Los Angeles" },
    ];
    const headers = [
      { key: "name", label: "First name" },
      { key: "age", label: "Age" },
      { key: "isActive", label: "Is active" },
    ];

    const expected = "First name,Age,Is active\nJohn,30,true\nJane,25,false";

    expect(dataArrayToCSV(data, headers)).toBe(expected);
  });

  it("handles empty headers", () => {
    const data = [
      { name: "John", age: 30, isActive: true, city: "New York" },
      { name: "Jane", age: 25, isActive: false, city: "Los Angeles" },
    ];
    const headers: string[] = [];

    const expected =
      "name,age,isActive,city\n" +
      "John,30,true,New York\n" +
      "Jane,25,false,Los Angeles";

    expect(dataArrayToCSV(data, headers)).toBe(expected);
  });

  it("handles data with special characters", () => {
    const data = [
      { name: "John,Doe", age: 1234.56, notes: "line1\nline2" },
      { name: 'Jane "The Doctor" Doe', age: 25, notes: "note,with,commas" },
    ];
    const headers = ["name", "age", "notes"];

    const expected =
      "name,age,notes\n" +
      '"John,Doe",1234.56,"line1\nline2"\n' +
      '"Jane ""The Doctor"" Doe",25,"note,with,commas"';

    expect(dataArrayToCSV(data, headers)).toBe(expected);
  });

  it("handles nested objects", () => {
    const data = [
      {
        name: "John",
        contact: {
          email: "john@example.com",
          phone: {
            home: "123-456",
          },
        },
      },
    ];
    const headers = ["name", "contact.email", "contact.phone.home"];

    const expected =
      "name,contact.email,contact.phone.home\n" +
      "John,john@example.com,123-456";

    expect(dataArrayToCSV(data, headers)).toBe(expected);
  });

  it("handles missing or null values", () => {
    const data = [
      { name: "John", age: null, isActive: true },
      { name: "Jane", age: undefined, isActive: false },
    ];
    const headers = ["name", "age", "isActive"];

    const expected = "name,age,isActive\nJohn,,true\nJane,,false";

    expect(dataArrayToCSV(data, headers)).toBe(expected);
  });

  it("handles combined complex scenarios", () => {
    const data = [
      {
        name: "John,Doe",
        age: 1234.56,
        isActive: true,
        city: "New York",
        contact: {
          email: "john@example.com",
          phone: {
            home: "123-456",
            isPreferred: true,
          },
          notes: "line1\nline2",
        },
      },
      {
        name: 'Jane "The Doctor" Doe',
        age: null,
        isActive: false,
        city: "Los Angeles",
        contact: {
          email: "jane@example.com,alt@example.com",
          phone: {
            home: undefined,
            isPreferred: false,
          },
          notes: "note,with,commas",
        },
      },
    ];
    const headers = [
      "name",
      "age",
      "isActive",
      "contact.email",
      "contact.phone.home",
      "contact.phone.isPreferred",
      "contact.notes",
    ];

    const expected =
      "name,age,isActive,contact.email,contact.phone.home,contact.phone.isPreferred,contact.notes\n" +
      '"John,Doe",1234.56,true,john@example.com,123-456,true,"line1\nline2"\n' +
      '"Jane ""The Doctor"" Doe",,false,"jane@example.com,alt@example.com",,false,"note,with,commas"';

    expect(dataArrayToCSV(data, headers)).toBe(expected);
  });
});
