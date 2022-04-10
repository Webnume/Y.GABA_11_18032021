let data = null;
async function getAllData() {
  try {
    const res = await fetch("/data/logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    data = await res.json();
    console.log("ok3");
    return {
      isLoaded: true,
      logements: data,
    };
  } catch (error) {
    console.error("/////", error);
    throw error;
  }
}

async function getHouse(idHouse) {
  try {
    if (data === null) {
      console.log("ok2");
      const tmp = await getAllData();
      console.log(tmp);
    }
    for (const logement of data) {
      if (logement.id === idHouse)
        return {
          isLoaded: true,
          logement,
        };
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { getAllData, getHouse };
