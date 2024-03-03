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
        <div class="avatar ${post.isActive === true ? "online" : "offline"}
        ">
          <div class="w-24 rounded-full">
            <img
              src="${post.image}"
            />
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
          <button><img src="./images/email.png" onclick="markAsRead('${postTitle}', ${view})" alt="" /></button>
        </div>
      </div>
        
        `;

      allPostDataContainer.appendChild(postContainer);
    });
  }, 2000);
};

const markAsRead = (postTitle, view) => {
  const completeRead = document.getElementById("mark-container");
  const counterTag = document.getElementById("read-count");
  let readCount = 0;
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

allPost();
