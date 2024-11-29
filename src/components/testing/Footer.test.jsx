import { fireEvent, render, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../Footer";

describe("Footer", () => {
    // 1. check if footer succesfully rendered
    it("should render Footer component", () => {
        const renderedFooter = render(<Footer/>)
        expect(renderedFooter).toBeDefined();
    });
    // 2. check footer props behaviour
    it("should render proper props", async () => {
        const renderedFooter = render(<Footer message="Footer Message"/>);
        const propsMessage = await renderedFooter.findByTestId("props-message");
        expect(propsMessage).toHaveTextContent("Footer Message");
    })
    // 3. check function button for message changed
    it("should change message when button is clicked", async () => {
        const renderedFooter = render(<Footer message="Footer Message"/>)

        const stateMessage = await renderedFooter.findByTestId("state-message");
        expect(stateMessage).toHaveTextContent("Hello, World")
        
        const btn = await renderedFooter.findByTestId("change-message-btn");
        fireEvent.click(btn);
    
        await waitFor(() => {
            expect(stateMessage).toHaveTextContent("State Changed")
        })
    })
});