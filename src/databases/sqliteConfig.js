// src/databases/sqliteConfig.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('celiacLife.db');

export const createTables = () => {
    db.transaction(tx => {
        tx.executeSql(
        `CREATE TABLE IF NOT EXISTS recipes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            category TEXT,
            ingredients TEXT,
            instructions TEXT
        );`
        );
        tx.executeSql(
        `CREATE TABLE IF NOT EXISTS habits (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            completed INTEGER
        );`
        );
    });
};

export const insertRecipe = (title, category, ingredients, instructions) => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO recipes (title, category, ingredients, instructions) VALUES (?, ?, ?, ?)',
            [title, category, ingredients, instructions]
        );
    });
};

export const insertHabit = (name, completed) => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO habits (name, completed) VALUES (?, ?)',
            [name, completed]
        );
    });
};

export default db;
