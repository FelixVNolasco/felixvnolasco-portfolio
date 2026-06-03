import { render, screen } from "@testing-library/react";

import About from "../components/About/About.component";
import Contact from "../components/Contact/Contact.component";
import Header from "../components/Header/Header.component";
import Projects from "../components/Projects/Projects.component";
import Skills from "../components/Skills/Skills.component";
import { portfolio } from "../data/portfolio";

describe("portfolio sections", () => {
  it("renders header navigation and social links", () => {
    render(<Header />);

    portfolio.navigation.forEach((link) => {
      expect(screen.getByRole("link", { name: link.label })).toHaveAttribute(
        "href",
        link.href
      );
    });

    portfolio.socials.forEach((social) => {
      expect(screen.getByRole("link", { name: social.label })).toHaveAttribute(
        "href",
        social.href
      );
    });
  });

  it("renders profile details and stable local avatar", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", { name: portfolio.owner.name })
    ).toBeInTheDocument();
    expect(screen.getByText(portfolio.owner.role)).toBeInTheDocument();
    expect(screen.getByAltText(portfolio.owner.avatar.alt)).toHaveAttribute(
      "src",
      portfolio.owner.avatar.src
    );
  });

  it("renders featured skills and additional skills", () => {
    render(<Skills />);

    portfolio.skills.featured.forEach((skill) => {
      expect(screen.getByText(skill.title)).toBeInTheDocument();
    });

    portfolio.skills.additional.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("renders project links as external links", () => {
    render(<Projects />);

    portfolio.projects.forEach((project) => {
      const link = screen.getByRole("link", { name: project.name });

      expect(link).toHaveAttribute("href", project.href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders accessible contact links", () => {
    render(<Contact />);

    portfolio.socials.forEach((social) => {
      expect(screen.getByRole("link", { name: social.label })).toHaveAttribute(
        "href",
        social.href
      );
    });
  });
});
