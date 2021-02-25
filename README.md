## Setup project

```bash
# Install packages
npm install
```

## Make task

1. Checkout to task branch:

    ```bash
    git checkout <task-branch>
    
    # Example
    git checkout 01-basic
    ```
2. Create `implementation` branch:
    ```bash
    git checkout -b <task-branch>-implementation
    
    # Example
    git checkout -b 01-basic-implementation
    ```

3. Make code

4. Commit changes

    ```bash
    git commit -m "<message>"
    git push origin <task-branch>-implementation
    ```

5. Create Merge Request from `-implementation` branch to origin branch (Example: from `01-basic-implementation` to `01-basic`)

6. And assign MR to teacher

## Run tests
```bash
npm test
```
