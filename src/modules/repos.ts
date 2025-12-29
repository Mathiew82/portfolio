import type { TechnologyColors } from "../types/TechnologyColors";

// Repo elements
const reposWrapper = document.querySelector<HTMLDivElement>(".repos");
const noResultsWrapper = document.querySelector<HTMLDivElement>(
  ".no-results-wrapper",
);
const loaderWrapper = document.querySelector<HTMLDivElement>(".loader-wrapper");

// Variables and functions
const TECHNOLOGY_COLORS: TechnologyColors = {
  CSS: "technology-blue",
  HTML: "technology-red",
  JavaScript: "technology-yellow",
  TypeScript: "technology-blue",
  Vue: "technology-green",
  Vim: "technology-green",
  Rust: "technology-brown",
  Python: "technology-green",
  Lua: "technology-violet",
  Shell: "technology-green",
};

let repos: any[] = [];

const dateDiff = (first: number, second: number): number => {
  return Math.round((second - first) / (1000 * 60 * 60));
};

const displayRepos = (): void => {
  repos.forEach((item: any) => {
    const languageHtml = item.language
      ? `
        <span>
          <span
            class="repos-language-circle ${TECHNOLOGY_COLORS[item.language?.split(" ")[0] as keyof TechnologyColors]}"
          ></span>
          <span class="repos-language-label">${item.language}</span>
        </span>
      `
      : "";

    const repoElement = document.createElement("div");
    repoElement.className = "col xs-12 sm-6 md-4 lg-4";
    repoElement.innerHTML = `<div class="repos__item">
          <a href="${item.html_url}" target="_blank" rel="noopener noreferrer" aria-label="View repository (opens in a new tab)" class="repos-title">
            <svg
              height="512pt"
              viewBox="0 -57 512 512"
              width="512pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M506.04 180.492c-7.774-12.554-21.524-20.047-36.782-20.047h-38.086V90.582c0-16.863-14.227-30.578-31.711-30.578H213.02c-.274 0-.458-.078-.532-.125L179.121 13.21C173.203 4.937 163.445 0 153.016 0H31.71C14.223 0 0 13.719 0 30.578v335.149c0 17.257 14.57 31.3 32.484 31.3h377.364c5.879 0 10.957-3.394 13.414-8.32l.011.004 84.563-169.84c6.133-12.308 5.457-26.656-1.797-38.379zM31.71 30h121.306c.898 0 1.507.395 1.699.664l33.418 46.734c5.64 7.891 14.945 12.606 24.887 12.606h186.44c1.048 0 1.58.492 1.712.668v69.773H129.699c-16.836 0-32.148 9.489-39.011 24.176L30 314.492V30.668c.133-.176.664-.668 1.71-.668zm449.27 175.5L400.56 367.023H38.566l79.301-169.699c1.922-4.113 6.68-6.879 11.832-6.879h339.559c4.793 0 9.008 2.184 11.273 5.84 1.274 2.059 2.383 5.328.45 9.215zm0 0"
              />
            </svg>
            ${item.name}
          </a>
          <div class="repos-description">${item.description}</div>
          <div class="repos-language">
          ${languageHtml}
            <a href="${item.url}/stargazers" target="_blank">
              <svg
                height="712pt"
                viewBox="0 -57 712 712"
                width="712pt"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M581.866 202.918c-8.435-7.418-18.818-12.2-30.028-13.829l-137.254-19.944-61.381-124.372c-5.014-10.158-12.771-18.557-22.432-24.286-8.963-5.314-19.234-8.124-29.705-8.124s-20.743 2.809-29.705 8.124c-9.661 5.729-17.417 14.127-22.431 24.286l-61.381 124.373-137.253 19.943c-11.211 1.629-21.595 6.411-30.029 13.829a58.258 58.258 0 0 0-16.905 25.741 58.275 58.275 0 0 0-1.454 30.761c2.463 10.958 8.053 20.931 16.166 28.838l99.317 96.811-23.446 136.698c-2.905 16.939 1.758 34.161 12.794 47.252 11.118 13.188 27.34 20.751 44.506 20.751 9.349 0 18.706-2.321 27.059-6.713l122.763-64.54 122.763 64.54c8.353 4.392 17.709 6.713 27.058 6.713 17.166 0 33.388-7.563 44.507-20.751 11.036-13.091 15.699-30.312 12.794-47.252l-23.445-136.698 99.317-96.811c8.112-7.908 13.702-17.88 16.165-28.838a58.265 58.265 0 0 0-1.453-30.761 58.281 58.281 0 0 0-16.907-25.741zm-27.71 54.663L444.472 364.499a15.297 15.297 0 0 0-4.4 13.542l25.893 150.969c1.696 9.89-6.162 17.921-15.077 17.921-2.353 0-4.778-.56-7.122-1.792l-135.578-71.277a15.293 15.293 0 0 0-14.24 0L158.37 545.139c-2.343 1.232-4.771 1.792-7.123 1.792-8.916 0-16.773-8.031-15.077-17.921l25.893-150.969a15.297 15.297 0 0 0-4.4-13.542L47.976 257.581c-9.081-8.851-4.07-24.273 8.479-26.097l151.582-22.026a15.3 15.3 0 0 0 11.52-8.37l67.79-137.356c2.806-5.686 8.263-8.529 13.72-8.529 5.458 0 10.914 2.844 13.719 8.529l67.79 137.356a15.301 15.301 0 0 0 11.52 8.37l151.581 22.026c12.55 1.824 17.56 17.246 8.479 26.097z"
                />
                <path
                  d="M450.887 590.27c-9.43 0-18.866-2.341-27.29-6.771l-122.53-64.418-122.53 64.419c-8.425 4.43-17.862 6.771-27.292 6.771-17.314 0-33.675-7.628-44.889-20.929-11.131-13.203-15.834-30.574-12.904-47.659l23.401-136.438-99.129-96.628c-8.182-7.975-13.819-18.033-16.304-29.086a58.768 58.768 0 0 1 1.466-31.025 58.768 58.768 0 0 1 17.051-25.961c8.507-7.482 18.981-12.305 30.288-13.948l136.993-19.906 61.265-124.137c5.057-10.246 12.88-18.716 22.625-24.495a58.764 58.764 0 0 1 29.96-8.193c10.56 0 20.92 2.833 29.96 8.193 9.744 5.778 17.568 14.249 22.625 24.495l61.265 124.137 136.994 19.906c11.306 1.642 21.778 6.465 30.286 13.948a58.748 58.748 0 0 1 17.051 25.962 58.75 58.75 0 0 1 1.466 31.025c-2.484 11.053-8.122 21.11-16.305 29.086l-99.129 96.627 23.401 136.438c2.93 17.085-1.773 34.456-12.905 47.659-11.215 13.3-27.577 20.928-44.89 20.928zm-149.821-72.317.233.122 122.762 64.54c8.281 4.354 17.558 6.655 26.825 6.655 17.018 0 33.101-7.499 44.125-20.573 10.94-12.978 15.563-30.052 12.683-46.845l-23.489-136.958 99.506-96.994c8.042-7.84 13.584-17.726 16.025-28.589 2.266-10.078 1.768-20.624-1.44-30.497s-9.003-18.698-16.76-25.52c-8.362-7.354-18.656-12.095-29.771-13.709l-137.514-19.981-.116-.236-61.38-124.374c-4.971-10.072-12.661-18.397-22.238-24.077a57.762 57.762 0 0 0-29.45-8.054 57.76 57.76 0 0 0-29.45 8.054c-9.577 5.679-17.267 14.005-22.238 24.077l-61.498 124.608-.26.038-137.253 19.944c-11.114 1.615-21.409 6.355-29.771 13.709a57.76 57.76 0 0 0-16.76 25.52 57.761 57.761 0 0 0-1.441 30.497c2.442 10.864 7.984 20.75 16.027 28.59l99.505 96.994-.044.26-23.446 136.698c-2.88 16.793 1.743 33.867 12.684 46.845 11.023 13.074 27.105 20.573 44.124 20.573 9.268 0 18.544-2.302 26.826-6.655l122.994-64.662zm149.821 29.477c-2.547 0-5.021-.622-7.354-1.85l-135.578-71.277c-4.229-2.225-9.542-2.225-13.775 0L158.602 545.58c-2.333 1.228-4.808 1.85-7.355 1.85-4.657 0-9.08-2.078-12.136-5.702-3.017-3.578-4.236-8.125-3.434-12.804l25.893-150.969a14.796 14.796 0 0 0-4.257-13.099L47.627 257.939c-4.338-4.228-5.87-10.434-3.998-16.196s6.759-9.882 12.755-10.753l151.582-22.026a14.8 14.8 0 0 0 11.143-8.096l67.79-137.356c2.681-5.433 8.109-8.808 14.168-8.808 6.058 0 11.487 3.375 14.167 8.808l67.79 137.356a14.795 14.795 0 0 0 11.144 8.096l151.581 22.026c5.996.871 10.884 4.992 12.756 10.754 1.872 5.761.34 11.967-3.999 16.195L444.82 364.857a14.793 14.793 0 0 0-4.256 13.099l25.893 150.969c.802 4.678-.418 9.225-3.435 12.803-3.055 3.624-7.478 5.702-12.135 5.702zm-149.821-75.827c2.552 0 5.095.628 7.353 1.815l135.578 71.277c2.189 1.15 4.507 1.734 6.89 1.734 4.361 0 8.507-1.949 11.371-5.348 2.824-3.349 3.965-7.606 3.213-11.988l-25.893-150.969a15.794 15.794 0 0 1 4.545-13.985l109.685-106.917c4.063-3.961 5.498-9.774 3.745-15.17-1.754-5.397-6.332-9.257-11.949-10.074l-151.581-22.026a15.8 15.8 0 0 1-11.896-8.643l-67.79-137.356c-2.512-5.089-7.597-8.25-13.271-8.25-5.675 0-10.76 3.161-13.271 8.25l-67.79 137.356a15.795 15.795 0 0 1-11.896 8.643L56.527 231.979c-5.616.816-10.194 4.676-11.947 10.073s-.318 11.21 3.745 15.171L158.01 364.14a15.795 15.795 0 0 1 4.544 13.985l-25.893 150.969c-.751 4.382.39 8.64 3.213 11.989 2.865 3.397 7.01 5.347 11.371 5.347 2.384 0 4.702-.584 6.89-1.734l135.578-71.277a15.863 15.863 0 0 1 7.353-1.816z"
                />
              </svg>
              ${item.stargazers_count}
            </a>
          </div>
        </div>`;
    reposWrapper?.appendChild(repoElement);
  });
};

const fetchRepos = async (): Promise<void> => {
  loaderWrapper?.classList.add("show");

  const path = "https://api.github.com/users/";
  const options = "?sort=updated&direction=desc";

  try {
    const response = await fetch(`${path}Mathiew82/repos${options}`);
    const reposResponse = await response.json();

    repos = reposResponse
      .filter((item: any) => item.name !== "Mathiew82" && !item.fork)
      .splice(0, 9);

    displayRepos();
  } catch (err) {
    noResultsWrapper?.classList.add("show");
    console.error(err);
  } finally {
    loaderWrapper?.classList.remove("show");
  }
};

const setGithubItems = (): void => {
  localStorage.setItem("github-cached", Date.now().toString());
  localStorage.setItem("github-response", JSON.stringify(repos));
  return;
};

const requestCache = async (): Promise<void> => {
  if (!localStorage.getItem("github-cached")) {
    await fetchRepos();
    setGithubItems();
    return;
  }

  const dateDiffHours = dateDiff(
    Number(localStorage.getItem("github-cached")),
    Date.now(),
  );

  if (dateDiffHours > 23) {
    localStorage.removeItem("github-cached");
    await fetchRepos();
    setGithubItems();
    return;
  }

  const githubResponse = localStorage.getItem("github-response");

  if (githubResponse) {
    repos = JSON.parse(githubResponse);
    displayRepos();
  }
};

// Execute code
requestCache();
