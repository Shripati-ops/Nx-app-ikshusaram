# Nx Monorepo with Next.js and Angular

This project demonstrates how to set up and manage a monorepo using Nx with both Next.js and Angular applications.

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)

### Installation

1. **Install Nx CLI**
    ```bash
    npm install -g nx@latest
    ```

2. **Create the Workspace**
    ```bash
    npx create-nx-workspace@latest
    ```

### Creating a Next.js Application

1. **Add Next.js Plugin**
    ```bash
    nx add @nx/next
    ```

2. **Generate Next.js Application**
    ```bash
    nx g @nx/next:app <app-name>
    ```

3. **Generate Libraries**
    ```bash
    nx g @nx/next:lib <library-name>
    ```

4. **Generate Pages and Components**
    - **Generate Page**
        ```bash
        nx g @nx/next:page <page-name> --directory=dir-where-to-place-the-page
        ```
    - **Generate Component**
        ```bash
        nx g @nx/next:component <component-name> --directory=dir-where-to-place-the-component
        ```

5. **Run the Project**
    ```bash
    nx dev <app-name>
    ```

6. **Lint the Project**
    - **Lint Application**
        ```bash
        nx lint <app-name>
        ```
    - **Lint Library**
        ```bash
        nx lint <library-name>
        ```

7. **Build the Project**
    - **Build Application**
        ```bash
        nx build <app-name>
        ```
    - **Build Library**
        ```bash
        nx build <library-name>
        ```

### Creating an Angular Application

1. **Add Angular Plugin**
    ```bash
    nx add @nx/angular
    ```

2. **Generate Angular Application**
    ```bash
    nx g @nx/angular:app <app-name>
    ```

3. **Generate Libraries**
    ```bash
    nx g @nx/angular:lib <library-name>
    ```

4. **Generate Modules and Components**
    - **Generate Module**
        ```bash
        nx g m <module-name>
        ```
    - **Generate Component**
        ```bash
        nx g c <component-name>
        ```

5. **Serve the Application**
    ```bash
    nx serve <app-name>
    ```

6. **Build the Project**
    - **Build Application**
        ```bash
        nx build <app-name>
        ```
    - **Build Library**
        ```bash
        nx build <library-name>
        ```

### Additional Resources

For more detailed information, refer to the official Nx documentation:

- [Nx API for Next.js](https://nx.dev/nx-api/next)
- [Nx Angular Monorepo Tutorial](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial)


    

