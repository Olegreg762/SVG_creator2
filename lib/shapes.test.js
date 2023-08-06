const generate_svg = require("./shapes");

let data = {
    "name":"logo",
    "shape": "Circle",
    "color": "black",
    "font": "white",
    "logo": "unn"
}

test("Logo Shape Circle", () =>{
    let data = {
        "name":"logo",
        "shape": "Circle",
        "color": "blue",
        "font": "green",
        "logo": "OpA"
    }
    expect(generate_svg(data)).toBe(`
    <svg width="300" height="200">
        <circle cx="100" cy="100" r="100" fill="${data.color.toLowerCase()}"></circle>
    <text x="100" y="100" alignment-baseline="middle" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="20">${data.logo}</text>
    </svg>`)
});

test("Logo Shape triangle", () =>{
    let data = {
        "name":"logo",
        "shape": "Triangle",
        "color": "red",
        "font": "green",
        "logo": "mcr"
    }
    expect(generate_svg(data)).toBe(`
    <svg width="300" height="200">
        <polygon points="100,0 200,200 0,200" fill="${data.color.toLowerCase()}"></polygon>
    <text x="100" y="150" alignment-baseline="middle" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="20">${data.logo}</text>
    </svg>`)
})

test("Logo Shape Circle", () =>{
    let data = {
        "name":"logo",
        "shape": "Square",
        "color": "red",
        "font": "white",
        "logo": "OpA"
    }
    expect(generate_svg(data)).toBe(`
    <svg width="300" height="200">
        <rect x="0" y="0" width="200" height="100" fill="${data.color.toLowerCase()}"></rect>
    <text x="150" y="100" alignment-baseline="middle" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="20">${data.logo}</text>
    </svg>`)
})