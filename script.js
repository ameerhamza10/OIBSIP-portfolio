
      const titles = [
        "UI/UX Designer",
        "Web Designer",
        "Front End Developer",
        "Graphic Designer",
      ];

      let index = 0;

      const heroHeading = document.getElementById("hero-heading");

      function changeTitle() {
        heroHeading.style.left = "-100%";

        setTimeout(() => {
          heroHeading.textContent = titles[index];
          heroHeading.style.left = "0";
          index = (index + 1) % titles.length;
        }, 500);
      }

      setInterval(changeTitle, 3000);
