document.addEventListener("DOMContentLoaded", () => {
    // Khởi tạo modal và các nút điều hướng
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "modal";
    modal.innerHTML = `
      <span class="close" id="close">&times;</span>
      <div class="modal-content">
        <img class="modal-image" id="modal-image" src="" alt="" />
        <button class="prev" id="prev">&#10094;</button>
        <button class="next" id="next">&#10095;</button>
      </div>
    `;
    document.body.appendChild(modal);

    const modalImage = document.getElementById("modal-image");
    const close = document.getElementById("close");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    let currentIndex = 0;
    let images = [];

    function createGallery(containerId, imgArray) {
      const galleryContainer = document.getElementById(containerId);
      if (!galleryContainer) return; // Nếu không tìm thấy container, không làm gì cả

      const gallery = document.createElement("div");
      gallery.className = "gallery";
      const moreImages = document.createElement("div");
      moreImages.className = "more-images";
      moreImages.id = `${containerId}-more-images`;
      moreImages.textContent = "... và nhiều ảnh khác";

      function updateGallery() {
        gallery.innerHTML = "";
        imgArray.slice(0, 5).forEach((image, index) => {
          const img = document.createElement("img");
          img.src = image;
          img.alt = `Image ${index + 1}`;
          img.addEventListener("click", () => {
            currentIndex = index;
            images = imgArray; // Cập nhật danh sách ảnh trong modal
            showModal();
          });
          gallery.appendChild(img);
        });

        moreImages.style.display = imgArray.length > 5 ? "block" : "none";
      }

      galleryContainer.appendChild(gallery);
      galleryContainer.appendChild(moreImages);

      updateGallery();
    }

    function showModal() {
      modal.style.display = "flex";
      updateModalImage();
    }

    function hideModal() {
      modal.style.display = "none";
    }

    function updateModalImage() {
      if (images.length > 0) {
        modalImage.src = images[currentIndex];
        modalImage.alt = `Image ${currentIndex + 1}`;
      }
    }

    function showNextImage() {
      if (images.length > 0) {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalImage();
      }
    }

    function showPrevImage() {
      if (images.length > 0) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateModalImage();
      }
    }

    close.addEventListener("click", hideModal);
    next.addEventListener("click", showNextImage);
    prev.addEventListener("click", showPrevImage);

    // Khởi tạo gallery trên các container khác nhau với các mảng ảnh riêng biệt
    const galleryImages1 = [
      "./image/css1.jpg",
      "./image/css2.jpg",
      "./image/css3.jpg",
      "./image/css4.jpg",
      "./image/css5.jpg",
      "./image/scr1.jpg",
      "./image/scr2.jpg",
      // Thêm nhiều đường dẫn hình ảnh nếu cần
    ];

    const galleryImages2 = [
      "./image/scr3.jpg",
      "./image/scr4.jpg",
      "./image/scr5.jpg",
      "./image/scr7.jpg",
      "./image/scr8.jpg",
      "./image/scr6.jpg",
      // Thêm nhiều đường dẫn hình ảnh nếu cần
    ];

    createGallery("gallery-container-1", galleryImages1);
    createGallery("gallery-container-2", galleryImages2);

    // Thêm sự kiện để đóng modal khi click bên ngoài ảnh
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        hideModal();
      }
    });

    // Thêm sự kiện để điều hướng ảnh bằng phím mũi tên
    document.addEventListener("keydown", (event) => {
      if (modal.style.display === "flex") {
        if (event.key === "ArrowLeft") {
          showPrevImage();
        } else if (event.key === "ArrowRight") {
          showNextImage();
        } else if (event.key === "Escape") {
          hideModal();
        }
      }
    });
});
