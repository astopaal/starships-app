import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import StarshipDetail from "../components/StarshipDetail";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("StarshipDetail component tests", () => {
  const starshipDetail = {
    name: "Millennium Falcon",
    model: "YT-1300 light freighter",
    manufacturer: "Corellian Engineering Corporation",
    length: "34.37",
    crew: "4",
    cost_in_credits: "100000",
    hyperdrive_rating: "0.5",
    max_atmosphering_speed: "1050",
  };

  it("should render component successfully", () => {
    const { getByText } = render(
      <MemoryRouter>
        <StarshipDetail starshipDetail={starshipDetail} loadStatus="SUCCESS" />
      </MemoryRouter>
    );

    expect(getByText(starshipDetail.name)).toBeInTheDocument();
  });

  it('should render an img element with src "require("../../assets/starship.png")" when loadStatus is "SUCCESS"', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <StarshipDetail starshipDetail={starshipDetail} loadStatus="SUCCESS" />
      </MemoryRouter>
    );

    const imgElement = getByAltText("shipDetail");

    expect(imgElement.src).toContain("starship.png");
  });

  
  it('should navigate to previous route when "Back" button is clicked', async () => {
    const mockNavigate = jest.fn();
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <StarshipDetail
          starshipDetail={starshipDetail}
          loadStatus="SUCCESS"
          navigate={mockNavigate}
        />
      </MemoryRouter>
    );
  
    const backButton = getByTestId("back-button");
  
    fireEvent.click(backButton);
  
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(-1);
    });
  });
  
});
