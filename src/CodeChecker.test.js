import {checkCode} from "./CodeChecker";

// const allColors = ["red", "green", "blue", "yellow", "orange", "grey", "pink", "violet"];

it("given correct code, returns all bulls", () => {
    expect(checkCode(["red", "green", "blue", "yellow", "orange"],
                     ["red", "green", "blue", "yellow", "orange"]))
        .toEqual({bulls: 5, cows: 0});
});


it("given not a single correct color, returns all zeros", () => {
    expect(checkCode(["red", "green", "blue", "yellow", "orange"],
                     ["pink", "pink", "pink", "pink", "pink"]))
        .toEqual({bulls: 0, cows: 0});
});

it("given correct colors but all in wrong places, returns all cows", () => {
    expect(checkCode(["red", "green", "blue", "yellow", "orange"],
                     ["green", "red", "yellow", "orange", "blue"]))
        .toEqual({bulls: 0, cows: 5});
});

it("given repeated colors some of which in correct place, returns bulls first", () => {
    expect(checkCode(["red", "red", "red", "red", "red"],
                     ["red", "green", "red", "yellow", "orange"]))
        .toEqual({bulls: 2, cows: 0});
});

it("given repeated colors all not in correct place, returns cows first", () => {
    expect(checkCode(["black", "red", "black", "red", "red"],
                     ["red", "green", "red", "yellow", "orange"]))
        .toEqual({bulls: 0, cows: 2});
});