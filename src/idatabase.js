import idb from "idb";

function openDatabase(){
  const dbPromise = idb.open('app-db',1,(upgradeDb)=>{
    upgradeDb.createObjectStore('games');
    upgradeDb.createObjectStore('gamesdetail', {keyPath: 'name'});
  });

  return dbPromise;
}

function addData(db, objectStore, data, key){
  const tx = db.transaction(objectStore, 'readwrite');
  const oStore = tx.objectStore(objectStore);
  if(key){
    oStore.put(data, key);
  }else{
    oStore.add(data);
  }
  return tx.complete;
}

function getData(db, objectStore, key){
  const tx = db.transaction(objectStore);
  const oStore = tx.objectStore(objectStore);
  return oStore.get(key);
}

export default {
  openDatabase,
  addData,
  getData
}