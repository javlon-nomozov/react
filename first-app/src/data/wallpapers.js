const wallpapers = [
  {
    id: 1,
    imgURL: "shukr.jpg",
    altText: "Shukr",
    categories: ["category1", "category2", "category3"],
    keywords: "paralax,shukr,arabic",
    colors: ["green", "lemonade"],
  },
  {
    id: 3,
    imgURL: "ferrari.jpg",
    altText: "Ferrari",
    categories: ["category1", "category2", "category4"],
    keywords: "car,ferrari,red",
    colors: ["red", "yellow"],
  },
  {
    id: 2,
    imgURL: "lemonade.jpg",
    altText: "Shukr2",
    categories: ["category1"],
    keywords: "lemonade,fruits",
    colors: ["lemonade", "yellow"],
  },
];

class WallpapersSchem {
  constructor(wallpapersList) {
    this.wallpapers = wallpapersList;
  }
  findById(id) {
    return this.wallpapers.find((el) => el.id === id) ?? null;
  }
  #rateCategoryFunc(el, categories) {
    let rate = 0;
    categories.forEach((category) => {
      if (el.categories.includes(category)) {
        rate++;
      }
    });
    return rate;
  }
  findByCategories(categories, all = false) {
    if (all) {
      this.wallpapers = this.wallpapers.filter((el) => {
        for (let i = 0; i < categories.length; i++) {
          const c = categories[i];
          if (!el.categories.includes(c)) {
            return false;
          }
        }
        return true;
      });
    } else {
      this.wallpapers = this.wallpapers.filter((el) => {
        for (let i = 0; i < categories.length; i++) {
          const c = categories[i];
          if (el.categories.includes(c)) {
            return true;
          }
        }
        return false;
      });
      this.wallpapers = this.wallpapers.sort((a, b) => {
        return (
          this.#rateCategoryFunc(b, categories) -
          this.#rateCategoryFunc(a, categories)
        );
      });
      return this;
    }
    return this;
  }
  findByKeyword(fullText) {
    // console.log("foo", "fooo".includes("foo"));
    this.wallpapers = this.wallpapers.filter((el) => {
      console.log({el});
      return fullText.split(" ").some((keyword) => {
        console.log(keyword, el.keywords, el.keywords.includes(keyword));
        if (el.keywords.includes(keyword)) {
          return true;
        }
      });
    });
    return this;
  }
}

const newWallpapers = new WallpapersSchem(wallpapers);
// console.log(newWallpapers.findById(3));
// console.log(
//   newWallpapers
//     .findByCategories(["category1", "category2"], true)
//     .findByCategories(["category4"]).wallpapers
// );
console.log(newWallpapers.findByKeyword("lemonade fruits"));
