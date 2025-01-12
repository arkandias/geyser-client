import {
  type MockInstance,
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import {
  dataArrayToCSV,
  downloadCSV,
  flattenSimpleObject,
  formatValue,
} from "./csv.ts";

describe("formatValue", () => {
  it("handles basic scalars", () => {
    expect(formatValue("simple")).toBe("simple");
    expect(formatValue(42)).toBe("42");
    expect(formatValue(true)).toBe("true");
    expect(formatValue(null)).toBe("");
    expect(formatValue(undefined)).toBe("");
  });

  it("handles strings with special characters", () => {
    expect(formatValue("hello,world")).toBe('"hello,world"');
    expect(formatValue('hello"world')).toBe('"hello""world"');
    expect(formatValue("hello\nworld")).toBe('"hello\nworld"');
    expect(formatValue("hello\rworld")).toBe('"hello\rworld"');
  });

  it("handles formatted numbers", () => {
    expect(formatValue(1234.56789)).toBe('"1\u202F234,57"');
  });
});

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
  it("generates CSV with headers and simple data", () => {
    const data = [
      { name: "John", age: 30, city: "New York" },
      { name: "Jane", age: 25, city: "Los Angeles" },
    ];
    const headers = ["name", "age", "city"];

    const expected =
      "name,age,city\n" + "John,30,New York\n" + "Jane,25,Los Angeles";

    expect(dataArrayToCSV(data, headers)).toBe(expected);
  });

  it("handles data with special characters", () => {
    const data = [
      { name: "John,Doe", age: 1234.56789, notes: "line1\nline2" },
      { name: 'Jane "The Doctor" Doe', age: 25, notes: "note,with,commas" },
    ];
    const headers = ["name", "age", "notes"];

    const expected =
      "name,age,notes\n" +
      '"John,Doe","1\u202F234,57","line1\nline2"\n' +
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

    const expected = "name,age,isActive\n" + "John,,true\n" + "Jane,,false";

    expect(dataArrayToCSV(data, headers)).toBe(expected);
  });

  it("handles combined complex scenarios", () => {
    const data = [
      {
        name: "John,Doe",
        age: 1234.56789,
        isActive: true,
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
      '"John,Doe","1\u202F234,57",true,john@example.com,123-456,true,"line1\nline2"\n' +
      '"Jane ""The Doctor"" Doe",,false,"jane@example.com,alt@example.com",,false,"note,with,commas"';

    expect(dataArrayToCSV(data, headers)).toBe(expected);
  });
});

describe("downloadCSV", () => {
  let createObjectURLSpy: MockInstance;
  let revokeObjectURLSpy: MockInstance;
  let createElementSpy: MockInstance;
  let appendChildSpy: MockInstance;
  let removeChildSpy: MockInstance;
  let mockLink: HTMLAnchorElement;
  let mockClickFn: MockInstance;

  beforeEach(() => {
    // Mock URL methods
    createObjectURLSpy = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("mock-url");
    revokeObjectURLSpy = vi.spyOn(URL, "revokeObjectURL");

    // Create mock link with proper typing
    mockLink = document.createElement("a");
    mockLink.style.display = "none";
    mockLink.href = "";
    mockLink.download = "";
    mockClickFn = vi.fn();
    Object.defineProperty(mockLink, "click", {
      value: mockClickFn,
      writable: true,
    });

    // Mock document methods
    createElementSpy = vi
      .spyOn(document, "createElement")
      .mockReturnValue(mockLink);
    appendChildSpy = vi.spyOn(document.body, "appendChild");
    removeChildSpy = vi.spyOn(document.body, "removeChild");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("creates and downloads a CSV file", () => {
    const data = [{ name: "John", age: 30 }];
    const headers = ["name", "age"];
    const filename = "test.csv";

    downloadCSV(data, headers, filename);

    // Check Blob creation
    const createObjectURLCall = createObjectURLSpy.mock.lastCall?.[0] as Blob;
    expect(createObjectURLCall).toBeInstanceOf(Blob);
    expect(createObjectURLCall.type).toBe("text/csv;charset=utf-8");

    // Verify link setup
    expect(mockLink.style.display).toBe("none");
    expect(mockLink.href).toBe("mock-url");
    expect(mockLink.download).toBe(filename);

    // Verify DOM operations sequence
    expect(createElementSpy).toHaveBeenCalledWith("a");
    expect(appendChildSpy).toHaveBeenCalledWith(mockLink);
    expect(mockClickFn).toHaveBeenCalled();
    expect(removeChildSpy).toHaveBeenCalledWith(mockLink);
    expect(revokeObjectURLSpy).toHaveBeenCalledWith("mock-url");

    // Verify Blob content
    return new Promise<void>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        expect(reader.result).toBe("name,age\nJohn,30");
        resolve();
      };
      reader.readAsText(createObjectURLCall);
    });
  });
});
