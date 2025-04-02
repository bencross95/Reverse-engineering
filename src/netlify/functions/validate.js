exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }
  
    const params = new URLSearchParams(event.body);
    const enteredPassword = params.get("password");
    const expectedPrefix = "RE002"; // Must match your Swift appIdentifier
  
    if (enteredPassword && enteredPassword.startsWith(expectedPrefix)) {
      return {
        statusCode: 200,
        body: JSON.stringify({ valid: true, message: "Access granted" }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ valid: false, message: "Access denied" }),
      };
    }
  };