# Prisma ORM

## What are ORMs

1. **Boring official defination**
    - ORM stands for Object-Relational Mapping, a programming technique used in software development to convert data between incompatible type systems in object-oriented programming languages. This technique creates a "virtual object database" that can be used from within the programming language.
    - ORMs are used to abstract the complexities of the underlying database into simpler, more easily managed objects within the code
2. **Easier to digest defination**
    - ORMs let you easily interact with your database without worrying too much about the underlying syntax (SQL language for eg)

## Why ORMs?

1. Simpler syntax (converts objects to SQL queries under the hood)

    ```ts
    // Non ORM
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await client.query(query, ["jack@jack.com"]);
    ```

    ```ts
    // ORM
    User.find({
    	email: "jack@jack.com",
    });
    ```

2. Abstraction that lets you flip the database you are using. Unified API irrespective of the DB

    ```ts
    // Postgresql
    SELECT * FROM users WHERE email = "jack@jack.com";

    // MongoDb
    mongoose.find({email: "jack@jack.com"});

    // ORM
    User.find({
    	email: "jack@jack.com",
    });
    ```

3. Type safety/Auto completion

    ```ts
    // Non ORM
    const result: any;

    // ORM
    const result: User;
    ```

4. Automatic migrations

    - In case of a simple Postgres app, it’s very hard to keep track of all the commands that were ran that led to the current schema of the table.

    ```
    // Users            |   // Todos
    username: string    |   title: string
    password: string    |   description: string
    firstName: string   |   done: boolean
    lastName: string    |   user_id: number
    ```

    ```ts
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE NOT NULL
    );

    ALTER TABLE users
    ADD COLUMN phone_number VARCHAR(15);
    ```

-   As your app grows, you will have a lot of these `CREATE` and `ALTER` commands.
-   ORMs (or more specifically Prisma) maintains all of these for you.

## What is Prisma

**`Prisma ORM` is a next-generation Node.js and TypeScript ORM that unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.**

1.  **Data model**
    -   In a single file, define your schema. What it looks like, what tables you have, what field each table has, how are rows related to each other.
2.  **Automated migrations**
    -   Prisma generates and runs database migrations based on changes to the Prisma schema.
3.  **Type Safety**

    -   Prisma generates a type-safe database client based on the Prisma schema.

        ```ts
        // Non ORM
        const result: any;

        // ORM
        const result: User;
        ```

4.  **Auto-Completion**

    ```ts
    userDb.find();
    ```

## Installing prisma in a fresh app

**Let’s create a simple TODO app**

### 1. Initialize an empty Node.js project

```bash
npm init -y
```

### 2. Add dependencies

```bash
npm install prisma typescript ts-node @types/node --save-dev
```

### 3. Initialize typescript

```bash
npx tsc --init
# Change `rootDit` to `src`
# Change `outDir` to `dist`
```

### 4. Initialize a fresh prisma project

```bash
npx prisma init
```
