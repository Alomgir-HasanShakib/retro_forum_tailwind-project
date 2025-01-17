const allPost = async () => {
  const spinner = document.getElementById("loader");
  spinner.classList.add("block");
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const posts = data.posts;
  //    console.log(posts);

  // here select where all post item show
  const allPostDataContainer = document.getElementById("active-data-container");
  setTimeout(() => {
    posts.forEach((post) => {
      spinner.classList.add("hidden");
      const postTitle = post.title;
      const view = post.view_count;
      //   here create all post shown section
      const postContainer = document.createElement("div");
      // here design the all post section
      postContainer.classList =
        "left-col bg-[#797DFC1A] p-4 lg:p-16 lg:flex gap-6 rounded-xl mb-10";
      postContainer.innerHTML = `
        
        <div class="inside-left">
        <div class="avatar indicator">
        <span class="indicator-item badge ${
          post.isActive === true ? "bg-green-500" : "bg-red-500"
        } rounded-full"></span> 
        <div class="w-20 h-20 rounded-lg">
          <img alt="Tailwind CSS examples" src="${post.image}" />
        </div>
      </div>
      </div>
      <div class="inside-right">
        <div
          class="category-auth space-x-5 lg:space-x-10 text-[#12132DCC] text-sm font-medium"
        >
          <span>#${post?.category}</span>
          <span>#${post?.author?.name}</span>
        </div>
        <div class="pera-desc space-y-4">
          <h2 class="font-bold text-xl text-[#12132D]">
           ${post?.title}
          </h2>
          <p
            class="pb-3 border-b-2 border-dashed inter-font text-sm text-[#12132D99]"
          >
          ${post?.description}
          </p>
        </div>
        <div class="icon-area flex justify-between pt-10">
          <div class="flex gap-4 inter-font text-[16px]">
            <div>
              <i class="fa-regular fa-comment"></i>
              <span>${post?.comment_count}</span>
            </div>
            <div>
              <i class="fa-regular fa-eye"></i>
              <span>${post?.view_count}</span>
            </div>
            <div>
              <i class="fa-regular fa-clock"></i>
              <span>${post?.posted_time}</span>
            </div>
          </div>
          <button><img src="./images/email.png" onclick="markAsRead('${postTitle.replace(
            /'/g,
            " "
          )}', ${view})" alt="" /></button>
        </div>
      </div>
        
        `;

      allPostDataContainer.appendChild(postContainer);
    });
  }, 2000);
};

const completeRead = document.getElementById("mark-container");
const counterTag = document.getElementById("read-count");
let readCount = 0;

const markAsRead = (postTitle, view) => {
  readCount++;
  counterTag.innerText = readCount;
  // here create mark as read section
  const markRead = document.createElement("div");
  markRead.innerHTML = `
      
      <div class="bg-white rounded-xl flex gap-4 p-4 mt-5">
      <h2 class="font-bold text-sm lg:text-xl text-[#12132D]">
       ${postTitle}
      </h2>
      <div class="flex items-center">
        <i class="fa-regular fa-eye"></i>
        <span>${view}</span>
      </div>
    </div>
   
    `;
  completeRead.appendChild(markRead);
};

const searchHandler = () => {
  const input = document.getElementById("search-input");
  const inputValue = input.value;
  searchItem(inputValue);
};

const searchItem = async (value) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/retro-forum/posts?category=${value}`
  );
  const data = await res.json();
  const posts = data.posts;

  const allPostDataContainer = document.getElementById("active-data-container");
  allPostDataContainer.innerHTML = "";

  setTimeout(() => {
    posts.forEach((post) => {
      const postTitle = post.title;

      const view = post.view_count;
      //   here create all post shown section
      const postContainer = document.createElement("div");
      // here design the all post section
      postContainer.classList =
        "left-col bg-[#797DFC1A] p-4 lg:p-16 lg:flex gap-6 rounded-xl mb-10";
      postContainer.innerHTML = `
        
        <div class="inside-left">
        <div class="avatar indicator">
        <span class="indicator-item badge ${
          post.isActive === true ? "bg-green-500" : "bg-red-500"
        } rounded-full"></span> 
        <div class="w-20 h-20 rounded-lg">
          <img alt="Tailwind CSS examples" src="${post.image}" />
        </div>
      </div>
      </div>
      <div class="inside-right">
        <div
          class="category-auth space-x-5 lg:space-x-10 text-[#12132DCC] text-sm font-medium"
        >
          <span>#${post?.category}</span>
          <span>#${post?.author?.name}</span>
        </div>
        <div class="pera-desc space-y-4">
          <h2 class="font-bold text-xl text-[#12132D]">
           ${post?.title}
          </h2>
          <p
            class="pb-3 border-b-2 border-dashed inter-font text-sm text-[#12132D99]"
          >
          ${post?.description}
          </p>
        </div>
        <div class="icon-area flex justify-between pt-10">
          <div class="flex gap-4 inter-font text-[16px]">
            <div>
              <i class="fa-regular fa-comment"></i>
              <span>${post?.comment_count}</span>
            </div>
            <div>
              <i class="fa-regular fa-eye"></i>
              <span>${post?.view_count}</span>
            </div>
            <div>
              <i class="fa-regular fa-clock"></i>
              <span>${post?.posted_time}</span>
            </div>
          </div>
          <button><img src="./images/email.png" onclick="markAsRead('${postTitle.replace(
            /'/g,
            " "
          )}', ${view})" alt="" /></button>
        </div>
      </div>
        
        `;

      allPostDataContainer.appendChild(postContainer);
    });
  }, 2000);
};

const letestPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();

  const mainContainer = document.getElementById("main-content-container");
  data.forEach((post) => {
    const container = document.createElement("div");
    container.classList = "card card-compact max-w-96 bg-base-100 shadow-xl";

    container.innerHTML = `
    
    <figure class="p-3">
              <img
                class="rounded-lg"
                src="${post.cover_image}"
                alt="Images"
              />
            </figure>
            <div class="card-body space-y-2">
              <p class="text-[#12132D99]">
                <i class="fa-solid fa-calendar-days pr-2"></i>
                ${post?.author?.posted_date || "No Publish Date"}
              </p>
              <h2 class="text-[#12132D] text-[18px] font-extrabold">
                ${post?.title}
              </h2>
              <p class="text-[#12132D99]">
                ${post?.description}
              </p>
              <div class="card-actions">
                <img src="${
                  post?.profile_image
                }" class="rounded-full w-[50px]" alt="" />
                <div>
                  <h4 class="font-bold text-[#12132D]">${
                    post?.author?.name
                  }</h4>
                  <p class="text-[#12132D99]">${
                    post?.author?.designation || "Unknown"
                  }</p>
                </div>
              </div>
            </div>
    
    `;
    mainContainer.appendChild(container);
  });
};

searchItem();
allPost();
letestPost();
