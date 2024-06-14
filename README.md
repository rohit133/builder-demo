# Quick Start Guide: Next.js, Tailwind CSS, and Builder.io

## Set Up a New Next.js Project

Create a new Next.js project:

Open the cmd / Terminal and run the following command `npx create-next-app@latest` 

- Give a Project Name:  ‘What is your project named? my-app’ `builder-app`
- Select `yes` Would you like to use TypeScript? No / Yes.
- Select `yes` Would you like to use ESLint? No / Yes.
- Select `no` Would you like to use Tailwind CSS? No / Yes
- Select `no` Would you like to use ‘`src/directory?`’
- Select `no` to use the App Router?
- Select `no` Would you like to customize the default `import alias (@/*)?`

![WhatsApp GIF 2024-06-12 at 20.51.56.gif](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/WhatsApp_GIF_2024-06-12_at_20.51.56.gif)

**Installing [Builder SDK](https://www.builder.io/c/docs/integrating-builder-pages#add-builder-as-a-dependency:~:text=At%20the%20command%20line%2C%20at%20the%20root%20of%20your%20project%2C%20use%20npm%20to%20install%20the%20Builder%20SDK%3A):**

After finishing the installation process, navigate to the builder-app directory using `cd builder-app/` and execute the command `npm install @builder.io/react` to install the necessary builder dependency.

![WhatsApp GIF 2024-06-12 at 20.59.49 (1).gif](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/WhatsApp_GIF_2024-06-12_at_20.59.49_(1).gif)

## Install and Configure Tailwind CSS

<aside>
💡 Even though Next.js by default give the option to install and configure Tailwind CSS, let’s us look at the manual process of installing and configuring Tailwind CSS.

</aside>

1. To set up your project to use Tailwind CSS, you'll need to follow these steps in your terminal:
    - Enter the command `npm install -D tailwindcss postcss autoprefixer` This installs Tailwind CSS, PostCSS, and Autoprefixer as development dependencies.
    
    ![WhatsApp GIF 2024-06-12 at 21.07.31.gif](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/WhatsApp_GIF_2024-06-12_at_21.07.31.gif)
    
    - Next, enter `npx tailwindcss init -p`. This command creates the `tailwind.config.js` file for Tailwind CSS configuration and the `postcss.config.js` file for PostCSS and Autoprefixer configuration.
    
    ![WhatsApp GIF 2024-06-12 at 21.09.53 (1).gif](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/WhatsApp_GIF_2024-06-12_at_21.09.53_(1).gif)
    
    <aside>
    💡 By following these steps, you will have set up your project to use Tailwind CSS with the necessary configurations for PostCSS and Autoprefixer.
    
    </aside>
    
2. In order to optimize Tailwind for production, start by modifying the `tailwind.config.ts` file to include the paths to all of your components, pages, and app.

    1. Remove the `backgroundImage { .. }` object in order to eliminate the default next.js styling.
    2. Customizes the theme by extending default attribute of the pages by adding custom colours, spacing, border radius, font families, and screen breakpoints. 
    
    ```tsx
    // tailwind.config.ts  {Updated tailwind configuration }
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
        extend: {
          colors: {
            primary: {
              light: "#3fbaeb",
              DEFAULT: "#0fa9e6",
              dark: "#0c87b8",
            },
            secondary: {
              light: "#ff7ce5",
              DEFAULT: "#ff49db",
              dark: "#ff16d1",
            },
          },
          spacing: {
            "128": "32rem",
            "144": "36rem",
          },
          borderRadius: {
            "4xl": "2rem",
          },
          fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
          },
          screens: {
            "3xl": "1600px",
          },
        },
      },
      plugins: [],
    };
    ```
    
    Specifies additional variants for utilities. For instance, enabling `backgroundColor` to have `active` variant and `textColor` to have `visited` variant.
    
    ```tsx
    variants: {
      extend: {
        backgroundColor: ['active'],
        textColor: ['visited'],
      },
    },
    ```
    
3. [**Plugins](https://tailwindcss.com/docs/plugins#:~:text=Customization-,Plugins,-Extending%20Tailwind%20with):** make sure to include the Tailwind CSS official plugins for `forms,` `typography,` and `aspect-ratio` utilities in your project to take full advantage of the functionality they provide. These plugins will help you easily create and customize `forms,` `typography,` and `aspect-ratios` in your user interface.
    
    ```tsx
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
    ```
    
4. [**Installation of Plugins](https://tailwindcss.com/docs/plugins#official-plugins):** When using tailwind CSS, it's important to remember that you need to install plugins in order to utilise  its full functionality. Make sure to install the required plugins alongside the main package for a seamless experience.
    
    ```bash
    npm install -D @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
    ```
    
5. [**Adding directives](https://tailwindcss.com/docs/functions-and-directives#:~:text=Core%20Concepts-,Functions%20%26%20Directives,-A%20reference%20for):** In order to start using Tailwind CSS, you'll need to first ensure that you have a directory named `/style` within your project directory. If it doesn't exist, you'll need to create it. Once that's set up, you'll want to create a new file called `global.css` inside the `/style` directory. In this `global.css` file, you should import the necessary Tailwind CSS components to get started.
    
    ```css
    **@tailwind base;
    @tailwind components;
    @tailwind utilities;**
    ```
    
    <aside>
    💡 Import `gobal.css` file into the `_app.tsx` file present in the `Pages/` directory to apply the styling to all the pages and components in your project.
    
    </aside>
    

## Integrating Builder into project for Page Management

1. In the app folder navigate to the pages directory and rename the `page.tsx` to `[[..page]].tsx` replace the code given below: 
    
    (if there’s no `page.tsx` find `index.tsx` and rename it to `[[...page]].tsx`)
    
    ### Dependencies
    
    Import the listed dependencies
    
    ```jsx
    // pages/[[...page]].tsx
    import React from "react";
    import { useRouter } from "next/router";
    import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
    import { BuilderContent } from "@builder.io/sdk";
    import DefaultErrorPage from "next/error";
    import Head from "next/head";
    import { GetStaticProps } from "next";
    ```
    
    ### Initialising  Builder.io
    
    To set up the builder, simply use the following function along with your unique API key.
    
    ```jsx
    // Replace with your Public API Key
    builder.init(YOUR_API_KEY);
    ```
    
    <aside>
    💡 Replace `YOUR_API_KEY` with your actual Builder.io Public API Key.
    
    </aside>
    
    ### `getStaticProps` Function
    
    This function fetches the content for a specific page from Builder.io and returns it as props to the page component. This function is executed at build time.
    
    ```jsx
    export const getStaticProps: GetStaticProps = async ({ params }) => {
      // Fetch the builder content for the given page
      const page = await builder
        .get("page", {
          userAttributes: {
            urlPath: "/" + ((params?.page as string[])?.join("/") || ""),
          },
        })
        .toPromise();
    
      // Return the page content as props
      return {
        props: {
          page: page || null,
        },
        // Revalidate the content every 5 seconds
        revalidate: 5,
      };
    };
    ```
    
    <aside>
    💡 Explanation
    
    1. **Parameters**: Receives `params` from Next.js, which includes the dynamic URL segments.
    2. **Fetching Content**: Uses the Builder.io SDK to fetch content for the page based on the URL path.
    3. **Returning Props**: Returns the fetched content as `props`. If no content is found, it returns `null`.
    4. **Revalidation**: Sets `revalidate` to 5 seconds, allowing incremental static regeneration to update the page content.
    </aside>
    
    ### `getStaticPaths` Function
    
    This function generates the paths for all pages that need to be statically generated. It is also executed at build time.
    
    ```jsx
    export async function getStaticPaths() {
      // Get a list of all pages in Builder
      const pages = await builder.getAll("page", {
        // We only need the URL field
        fields: "data.url",
        options: { noTargeting: true },
      });
    
      // Generate the static paths for all pages in Builder
      return {
        paths: pages
          .map((page) => `${page.data?.url}`)
          .filter((url) => url !== "/"),
        fallback: "blocking",
      };
    }
    ```
    
    <aside>
    💡 Explanation
    
    1. **Fetching Pages**: Fetches a list of all pages from Builder.io.
    2. **Generating Paths**: Maps over the fetched pages to extract their URLs and generate static paths.
    3. **Fallback**: Sets `fallback` to "blocking" which means new paths not returned by `getStaticPaths` will be generated on-demand.
    </aside>
    
    ### Page Component
    
    This component renders the page content fetched from Builder.io or shows a 404 error if the content is not found.
    
    ```jsx
    export default function Page({ page }: { page: BuilderContent | null }) {
      const router = useRouter();
      const isPreviewing = useIsPreviewing();
    
      // If the page content is not available and not in preview mode, show a 404 error page
      if (!page && !isPreviewing) {
        return <DefaultErrorPage statusCode={404} />;
      }
    
      // If the page content is available, render the BuilderComponent with the page content
      return (
        <>
          <Head>
            <title>{page?.data?.title}</title>
          </Head>
          {/* Render the Builder page */}
          <BuilderComponent model="page" content={page || undefined} />
        </>
      );
    }
    ```
    
    <aside>
    💡 Explanation
    
    1. **Router and Previewing**: Initialises  the Next.js router and checks if the page is in preview mode.
    2. **Error Handling**: If no page content is found and not in preview mode, it renders a 404 error page.
    3. **Page Rendering**:
        - Uses the `Head` component to set the page title.
        - Uses the `BuilderComponent` to render the page content from Builder.io.
    </aside>
    

## **Creating & updating pages using Builder. Io interface.**

1. To get started, go to [Builder.io](http://builder.io/) and sign up for a new account if you haven't already. Once you're logged in, access the dashboard and locate the settings menu in the sidebar. From there, navigate to the 'space tab' and make sure to copy the public API key.

![WhatsApp GIF 2024-06-13 at 06.53.23.gif](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/WhatsApp_GIF_2024-06-13_at_06.53.23.gif)

<aside>
💡 You can also press  `'cmd + k'`(*for mac*) or `ctrl + k` (*for windows*) and type ‘copy your api key’ and press ‘return key’ (*for mac*) or ‘Enter key’ (*for windows)* to copy the API key.

</aside>

![Screenshot 2024-06-13 at 6.57.20 AM.png](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/Screenshot_2024-06-13_at_6.57.20_AM.png)

1. To add the API key to the code, open the local code editor and locate the `page.tsx` file. Then, find the `builder.init(YOUR_PUBLIC_API_KEY);` function and insert the API key into the parentheses.
    
    
    ![WhatsApp GIF 2024-06-13 at 12.11.43.gif](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/WhatsApp_GIF_2024-06-13_at_12.11.43.gif)
    

1. Start the server, open the terminal and type `npm run dev`. After that, go to [http://localhost:3000](http://localhost:3000/) on your web browser to see if the server is up and running. You should see the default page for next.js.
    
    ![WhatsApp GIF 2024-06-13 at 10.40.03.gif](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/WhatsApp_GIF_2024-06-13_at_10.40.03.gif)
    

1. Upon initiating the server, please proceed to launch your web browser and access the builder dashboard. Subsequently, navigate to the sidebar and select the Model tab. Upon reaching the Content models page, designate the `Page Model` and insert “`localhost:3000`” as the preview URL, followed by saving the changes.
    
    <aside>
    🗯️ If the there’s no model available then create a new model. Click on `+ Create Model` button and select the page type give a name such as “eg: Page” give a short description and click on Create. 
    
    Explore the Model section to create custom content model for custom content types, such as custom sections or structured data, for your site. These content types can include elements like announcement bars, blog articles, navigation links, and much more. [Read More](https://www.builder.io/c/docs/models-intro#intro-to-models)
    
    ![Untitled](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/Untitled.png)
    
    ![Untitled](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/Untitled%201.png)
    
    </aside>
    
2. Head to the Content tab and you'll find a list of Demo content. To add a new entry, click on the `+ New Entry` button. Then, select the Content Model (for example, 'Page'). Next, enter the name of the page, for example, "home". The URL will be automatically generated, but you can also edit it. Change the URL to "/", which will make it the root directory. Finally, click on `+ Create Page` 
    
    ![WhatsApp GIF 2024-06-13 at 12.25.22.gif](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/WhatsApp_GIF_2024-06-13_at_12.25.22.gif)
    
3. Once the page is created. Notice the page editor for the page loads automatically.  
    
    ![WhatsApp GIF 2024-06-13 at 10.52.02.gif](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/WhatsApp_GIF_2024-06-13_at_10.52.02.gif)
    

1. Use the visual tool to drag and drop components in this case we will use the “Text Box” to Redner some Content on the home page to check the integration is working perfectly.
    
    ![Untitled](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/Untitled%202.png)
    

1. Drag and drop the Text box from the left side of the screen and Add some text via the editor window “Hello Builder” and click on Publish and Navigate to the [localhost:3000](http://localhost:3000/)/ to view the change on the server
    
    ![Untitled](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/Untitled%203.png)
    
    ![Untitled](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/Untitled%204.png)
    

## **Creating Custom Component**

To create [custom component](https://www.builder.io/c/docs/custom-components-intro#integrating-custom-components) in builder is relatively easy all you need to do add a new file into your project directory `builder-registry.ts` to register your component.

<aside>
💡 Why register component?
To integrate your custom component with Builder, it is necessary to register the component to enable its display in the Visual Editor as a custom block.

</aside>

1. Start by Creating a new `components` directory into you Project directory.
    
    ![Untitled](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/Untitled%205.png)
    

1. Add a new file `Image.tsx` inside the `components` directory and create a simple react component that takes in 2 props image src and alt text.
    
    ![Untitled](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/Untitled%206.png)
    
    ![Untitled](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/Untitled%207.png)
    

In the above example we created a new custom component take as image input via the builder page builder interface and to render it on the screen.

![Untitled](Quick%20Start%20Guide%20Next%20js,%20Tailwind%20CSS,%20and%20Build%203d5f86a3019a4565ab29c8b3b26fdde6/Untitled%208.png)

### **Advance concepts:**

- **Localization:** It is the technique of delivering content and formatting specific to different regions. [Read More](https://www.builder.io/c/docs/localization-intro#introduction-to-localization-with-builder)
- **Targeting:** Targeting content for specific audiences can help you drive customer acquisition and retention. [Read More](https://www.builder.io/c/docs/targeting#targeting-content)
- **Dynamic Preview URLs:** A Dynamic Preview URL lets you see how your content will look live before it's published. This is especially helpful for dynamic routing, custom fields, or targeting to ensure an accurate preview under real-world conditions. [Read More](https://www.builder.io/c/docs/dynamic-preview-urls#dynamic-preview-ur-ls)
- **Types of Reusable Blocks:** Reusing parts of your page saves time and makes updates easier. To reuse things like headers, footers, and product recommendation sections. [Read More](https://www.builder.io/c/docs/reusing-blocks#types-of-reusable-blocks)

### **Best Practices:**

- **Ensure Accessibility Compliance**: Develop accessible content adhering to W3C guidelines to enhance usability for all users. [Read More](https://www.builder.io/c/docs/best-practices#accessibility)
- **Layout:** Responsive design is a best practice in and of itself, whether you're coding or using a visual tool such as Builder. [Read More](https://www.builder.io/c/docs/best-practices#layout)
- **Styling Blocks**: Use the Full Page Width setting in the Style Tab for a quicker, typo-free approach to making blocks as wide as the viewport. [Read More](https://www.builder.io/c/docs/best-practices#styling-blocks)
- **Correctly Use Text Blocks**: Set Text Blocks according to their semantic meaning to improve accessibility and styling consistency. [Read More](https://www.builder.io/c/docs/best-practices#text)

**Additional Resources:**

- [Working with Images](https://www.builder.io/c/docs/images#working-with-images).
- [Responsive Design](https://www.builder.io/c/docs/guides/responsive-design#span-style-background-color-transparent-responsive-design-span).
- [Popular Tutorials](https://www.builder.io/c/docs/start-building#:~:text=LET%27S%20BUILD%20TOGETHER-,Popular%20Tutorials,-The%20documentation%20within).