async function addUser() {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: "Alan Legend",
        job: "Tester",
      }),
    });
    const body = await response.json();
  
    console.log(body);
  }

  await addUser();