import { describe, expect, test, beforeEach } from "bun:test";
import { render } from "@testing-library/react";
import { Button } from "../../src/components/ui/button";

describe("Button component", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test("renders with text", () => {
    const { getByRole } = render(<Button>Click me</Button>);
    expect(getByRole("button", { name: "Click me" })).toBeDefined();
  });

  test("renders destructive variant", () => {
    const { getByRole } = render(<Button variant="destructive">Delete</Button>);
    const button = getByRole("button", { name: "Delete" });
    expect(button.className).toContain("bg-destructive");
  });

  test("renders outline variant", () => {
    const { getByRole } = render(<Button variant="outline">Outline</Button>);
    const button = getByRole("button", { name: "Outline" });
    expect(button.className).toContain("border");
  });

  test("renders large size", () => {
    const { getByRole } = render(<Button size="lg">Large Button</Button>);
    const button = getByRole("button", { name: "Large Button" });
    expect(button.className).toContain("h-10");
  });

  test("accepts custom className", () => {
    const { getByRole } = render(<Button className="custom-class">Styled</Button>);
    const button = getByRole("button", { name: "Styled" });
    expect(button.className).toContain("custom-class");
  });

  test("passes through native button props", () => {
    const { getByRole } = render(<Button disabled>Disabled</Button>);
    const button = getByRole("button", { name: "Disabled" }) as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });
});
