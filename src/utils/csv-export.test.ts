import { describe, expect, it } from "vitest";

import { flattenSimpleObject } from "./csv-export.ts";
import type { Scalar } from "@/types/csv-data.ts";

describe("flattenSimpleObject", () => {
  it("handles flat object mapping", () => {
    const fields = {
      name: "userName",
      age: "userAge",
      isActive: "userIsActive",
    };
    const obj = {
      name: "John Doe",
      age: 30,
      isActive: true,
    };
    expect(flattenSimpleObject(fields, obj)).toEqual({
      userName: "John Doe",
      userAge: 30,
      userIsActive: true,
    });
  });

  it("handles deeply nested object mapping", () => {
    const fields = {
      user: {
        profile: {
          personal: {
            firstName: "givenName",
            lastName: "familyName",
            age: "userAge",
            contact: {
              email: "userEmail",
              phone: "phoneNumber",
            },
          },
          settings: {
            theme: "userTheme",
            notifications: "notificationPrefs",
          },
        },
      },
    };
    const obj = {
      user: {
        profile: {
          personal: {
            firstName: "Alice",
            lastName: "Johnson",
            age: 30,
            contact: {
              email: "jane@example.com",
              phone: "123-456-7890",
            },
          },
          settings: {
            theme: "dark",
            notifications: { email: true, push: false },
          },
        },
      },
    };
    expect(flattenSimpleObject<Scalar>(fields, obj)).toEqual({
      givenName: "Alice",
      familyName: "Johnson",
      userAge: 30,
      userEmail: "jane@example.com",
      phoneNumber: "123-456-7890",
      userTheme: "dark",
      notificationPrefs: { email: true, push: false },
    });
  });

  it("handles missing or undefined values", () => {
    const fields = {
      name: "userName",
      age: "userAge",
      address: {
        street: "streetAddress",
        city: "cityName",
      },
    };
    const obj = {
      name: "Bob",
      age: undefined,
      // address is missing
    };
    expect(flattenSimpleObject(fields, obj)).toEqual({
      userName: "Bob",
      age: undefined,
      streetAddress: undefined,
      cityName: undefined,
    });
  });

  it("handles empty objects", () => {
    expect(flattenSimpleObject({}, {})).toEqual({});
  });

  it("handles null values", () => {
    const fields = {
      data: {
        value: "storedValue",
      },
    };
    const obj = {
      data: null,
    };
    expect(flattenSimpleObject(fields, obj)).toEqual({
      storedValue: undefined,
    });
  });
});
