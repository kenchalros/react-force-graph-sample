export type Graph = {
  nodes: Node[];
  links: Link[];
};

export type Node = {
  id: string | number;
  name: string;
  val: number;
};

export type Link = {
  source: string | number;
  target: string | number;
};

export const graphData: Graph = {
  nodes: [
    {
      id: "id1",
      name: "name1",
      val: 1,
    },
    {
      id: "id2",
      name: "name2",
      val: 2,
    },
    {
      id: "id3",
      name: "name3",
      val: 3,
    },
    {
      id: "id4",
      name: "name4",
      val: 4,
    },
    {
      id: "id5",
      name: "name5",
      val: 5,
    },
    {
      id: "id6",
      name: "name6",
      val: 6,
    },
  ],
  links: [
    {
      source: "id1",
      target: "id2",
    },
    {
      source: "id1",
      target: "id3",
    },
    {
      source: "id3",
      target: "id2",
    },
    {
      source: "id3",
      target: "id4",
    },
    {
      source: "id5",
      target: "id6",
    },
    {
      source: "id1",
      target: "id6",
    },
  ],
};
