const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("constructor", () => {
    it("creates a Manager object", () => {
      const manager = new Manager(
        "Bossman",
        1001,
        "imtheboss@company.org",
        405
      );

      expect(manager.getName()).toBe("Bossman");
      expect(manager.getId()).toBe(1001);
      expect(manager.getEmail()).toBe("imtheboss@company.org");
      expect(manager.getOfficeNumber()).toBe(405);
      expect(manager.getRole()).toBe("Manager");
    });
  });

  describe("getOfficeNumber", () => {
      it("should return 405", () => {
        const manager = new Manager(
            "Bossman",
            1001,
            "imtheboss@company.org",
            405
          );

        expect(manager.getOfficeNumber()).toBe(405)
      })
  })

  describe("getRole", () => {
      it("should return \"Manager\"", () => {
        const manager = new Manager(
            "Bossman",
            1001,
            "imtheboss@company.org",
            405
          );

        expect(manager.getRole()).toBe("Manager")
      })
  })
});
