export enum CurrentMenu {
  HOME = "home",
  SEARCH = "search",
  EXPLORE = "explore",
  REELS = "reels",
  MESSAGE = "message",
  LIKE = "like",
  ADD = "add",
  PROFILE = "profile",
}

export const menuItems = [
  {
    menu: CurrentMenu.HOME,
    icon: "/img/home-icon.png",
    label: "หน้าแรก",
    alt: "home-icon",
  },
  {
    menu: CurrentMenu.SEARCH,
    icon: "/img/search-icon.png",
    label: "ค้นหา",
    alt: "search-icon",
  },
  {
    menu: CurrentMenu.EXPLORE,
    icon: "/img/explore-icon.png",
    label: "สำรวจ",
    alt: "explore-icon",
  },
  {
    menu: CurrentMenu.REELS,
    icon: "/img/reels-icon.png",
    label: "Reels",
    alt: "reels-icon",
  },
  {
    menu: CurrentMenu.MESSAGE,
    icon: "/img/chat-icon.png",
    label: "ข้อความ",
    alt: "chat-icon",
  },
  {
    menu: CurrentMenu.LIKE,
    icon: "/img/like-icon.png",
    label: "การแจ้งเตือน",
    alt: "like-icon",
  },
  {
    menu: CurrentMenu.ADD,
    icon: "/img/add-icon.png",
    label: "สร้าง",
    alt: "add-icon",
  },
];
