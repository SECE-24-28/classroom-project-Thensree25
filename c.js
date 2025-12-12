const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017/';
const dbName = 'database1';
const collectionName = 'users';

const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // ✅ CLEAR THE COLLECTION FIRST to avoid duplicates
        await collection.deleteMany({});
        console.log('Cleared existing documents from collection');

        // Insert 3 users
        console.log('\n--- INSERT 3 USERS ---');
        const users = [
            { name: 'John Doe', email: 'john@example.com', age: 30 },
            { name: 'Raja', email: 'raja@example.com', age: 26 },
            { name: 'Surya', email: 'surya@example.com', age: 35 }
        ];
        
        const insertResult = await collection.insertMany(users);
        console.log(`Inserted ${insertResult.insertedCount} users`);
        
        // Show all users
        console.log('\n--- ALL USERS ---');
        const allUsers = await collection.find({}).toArray();
        allUsers.forEach((user, index) => {
            console.log(`${index + 1}. Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`);
        });

        // Delete one user (John Doe)
        console.log('\n--- DELETE ONE USER ---');
        const deleteResult = await collection.deleteOne({ name: 'John Doe' });
        console.log(`Deleted ${deleteResult.deletedCount} user named 'John Doe'`);

        // Show remaining users
        console.log('\n--- REMAINING USERS ---');
        const remainingUsers = await collection.find({}).toArray();
        remainingUsers.forEach((user, index) => {
            console.log(`${index + 1}. Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`);
        });

    } catch (error) {
        console.log('Error:', error);
    } finally {
        await client.close();
        console.log('\nConnection closed');
    }
}

main();