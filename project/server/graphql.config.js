module.exports = {
  projects: {
    app: {
      schema: ["./graphql/schemas.ts"],
      documents: ["**/*.{graphql,js,ts,jsx,tsx}"]
    }
  }
};
