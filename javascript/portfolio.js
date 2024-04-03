// Image Visibility

document.addEventListener("DOMContentLoaded", function () {
  // Function to handle toggling visibility of desktop and mobile images
  function toggleImageVisibility(altViewClick, desktopImgId, mobileImgId) {
    altViewClick.addEventListener("click", function (event) {
      //  event.preventDefault(); // Prevent default link behavior

      var desktopImg = document.getElementById(desktopImgId);
      var mobileImg = document.getElementById(mobileImgId);

      desktopImg.classList.toggle("d-none");
      mobileImg.classList.toggle("d-none");
    });
  }

  // Toggle visibility for each set of desktop and mobile images
  toggleImageVisibility(
    document.getElementById("alt-view-one-click"),
    "case-one-desktop-img",
    "case-one-mobile-img"
  );

  toggleImageVisibility(
    document.getElementById("alt-view-two-click"),
    "case-two-desktop-img",
    "case-two-mobile-img"
  );

  toggleImageVisibility(
    document.getElementById("alt-view-three-click"),
    "case-three-desktop-img",
    "case-three-mobile-img"
  );

  // Function to update image visibility based on window width
  function updateImageVisibility() {
    var imageWrappers = document.querySelectorAll(".project-portfolio");

    imageWrappers.forEach(function (imageWrapper) {
      var desktopImg = imageWrapper.querySelector(".portfolio-desktop-view");
      var mobileImg = imageWrapper.querySelector(".portfolio-mobile-view");

      if (window.innerWidth <= 768) {
        if (mobileImg) {
          mobileImg.classList.remove("d-none");
        }
        if (desktopImg) {
          desktopImg.classList.add("d-none");
        }
      } else {
        if (desktopImg) {
          desktopImg.classList.remove("d-none");
        }
        if (mobileImg) {
          mobileImg.classList.add("d-none");
        }
      }
    });
  }

  // Initial call to update image visibility on page load
  updateImageVisibility();

  // Event listener for window resize to update image visibility dynamically
  window.addEventListener("resize", function () {
    updateImageVisibility();
  });
});

// Popups

document.addEventListener("DOMContentLoaded", function () {
  const codeOneClick = document.getElementById("code-one-click");
  const codeTwoClick = document.getElementById("code-two-click");
  const codeThreeClick = document.getElementById("code-three-click");
  const codeFourClick = document.getElementById("code-four-click");
  console.log(codeFourClick);

  const caseOneCode = document.getElementById("case-one-code");
  const caseTwoCode = document.getElementById("case-two-code");
  const caseThreeCode = document.getElementById("case-three-code");
  const caseFourCode = document.getElementById("case-four-code");
  console.log(caseFourCode);

  function toggleCodeVisibility(codeElement) {
    codeElement.classList.toggle("show");
  }

  // Function to close all code popups
  function closeAllCodePopups() {
    caseOneCode.classList.remove("show");
    caseTwoCode.classList.remove("show");
    caseThreeCode.classList.remove("show");
    caseFourCode.classList.remove("show");
  }

  codeOneClick.addEventListener("click", function (event) {
    toggleCodeVisibility(caseOneCode);
    event.stopPropagation(); // Prevent click event from bubbling up
  });

  codeTwoClick.addEventListener("click", function (event) {
    toggleCodeVisibility(caseTwoCode);
    event.stopPropagation(); // Prevent click event from bubbling up
  });

  codeThreeClick.addEventListener("click", function (event) {
    toggleCodeVisibility(caseThreeCode);
    event.stopPropagation(); // Prevent click event from bubbling up
  });

  codeFourClick.addEventListener("click", function (event) {
    toggleCodeVisibility(caseFourCode);
    event.stopPropagation(); // Prevent click event from bubbling up
  });

  // Close code popups when clicking outside of them
  document.addEventListener("click", function (event) {
    closeAllCodePopups();
  });

  // Close code popups when tapping outside of them on touch devices
  document.addEventListener("touchstart", function (event) {
    if (
      !event.target.matches("#code-one-click") &&
      !event.target.matches("#case-one-code") &&
      !event.target.matches("#code-two-click") &&
      !event.target.matches("#case-two-code") &&
      !event.target.matches("#code-three-click") &&
      !event.target.matches("#case-three-code") &&
      !event.target.matches("#code-four-click") &&
      !event.target.matches("#case-four-code")
    ) {
      closeAllCodePopups();
    }
  });
});
