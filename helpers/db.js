import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('places.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, names TEXT NOT NULL, age NUMBER NOT NULL, email TEXT NOT NULL,contact NUMBER NOT NULL,college TEXT NOT NULL,skill TEXT NOT NULL );',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertPlace = (title, imageUri, address, lat, lng) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            `INSERT INTO places (names,age,school,email,contact,college,skill) VALUES (?, ?, ?, ?, ?,?,?);`,
            [title, imageUri, address, lat, lng],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
};
