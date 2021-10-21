let data = null;
async function getAllData() {
  try {
    console.log("ok0")
    const res = await fetch("./data/logements.json");
    console.log("ok1", res.ok, res)
    data = await res.json();
    console.log("ok2")
    return {
      isLoaded: true,
      logements: data
    };
  } catch (error) {
    console.error("/////",error)
    throw error;
  }
}

async function getHouse(idHouse){
  try{

    if (data === null){
      const tmp = await getAllData();
      console.log(tmp);
    }
    console.log("loaded")
    for( const logement of data){
      console.log(logement.id, idHouse)
      if (logement.id === idHouse) return {
        isLoaded: true,
        logement
      };
  // return {
  //   isLoaded: true,
  //   logements: "erreur",
  // };
    }
  }
  catch(err){
    // console.error(err);
    throw err;
  }
}

export { getAllData, getHouse };
