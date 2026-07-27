export interface StaffGroup {
  rank: string;
  color: string;
  members: string[];
}

export const staffGroups: StaffGroup[] = [
  {
    rank: "Owners",
    color: "#EC2B2B",
    members: ["Londraa", "BandiSergio"],
  },
  {
    rank: "Developers",
    color: "#38BDF8",
    members: ["LostStr1ng", "RaoQUEB"],
  },
  {
    rank: "Sys Admin",
    color: "#2DD4BF",
    members: ["Alex"],
  },
  {
    rank: "Admins",
    color: "#F97316",
    members: ["zJasMartzx"],
  },
  {
    rank: "SrMods",
    color: "#7C3AED",
    members: ["WisevenTR", "XxADLxX"],
  },
  {
    rank: "Mods",
    color: "#C4B5FD",
    members: ["MiguiGamer1000"],
  },
  {
    rank: "Ayudantes",
    color: "#86EFAC",
    members: ["ElReghos"],
  },
];
