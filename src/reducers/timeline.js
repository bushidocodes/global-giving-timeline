import gravatar from "gravatar";

export const ADD_ITEM = "ADD_ITEM";
export const SET_TIMELINE = "SET_TIMELINE";

const initialState = [
  {
    timestamp: 1511811939,
    org: {
      logoURL: "https://en.gravatar.com/u/spmcbride1201",
      name: "My Awesome Org"
    },
    user: {
      name: "Sean McBride",
      phone: "707-428-0670",
      avatar: gravatar.url("spmcbride1201@gmail.com", {
        s: "100",
        d: "retro"
      })
    },
    content: {
      type: "text",
      data: "My first comment"
    }
  },
  {
    timestamp: 1511811939,
    org: {
      logoURL: "https://en.gravatar.com/u/spmcbride1201",
      name: "My Awesome Org"
    },
    user: {
      name: "Sean McBride",
      phone: "707-428-0670",
      avatar: gravatar.url("spmcbride1201@gmail.com", {
        s: "100",
        d: "retro"
      })
    },
    content: {
      type: "text",
      data: "My first comment"
    }
  },
  {
    timestamp: 1511811939,
    org: {
      logoURL: "https://en.gravatar.com/u/spmcbride1201",
      name: "My Awesome Org"
    },
    user: {
      name: "Sean McBride",
      phone: "707-428-0670",
      avatar: gravatar.url("spmcbride1201@gmail.com", {
        s: "100",
        d: "retro"
      })
    },
    content: {
      type: "text",
      data: "My first comment"
    }
  },
  {
    timestamp: 1511811939,
    org: {
      logoURL: "https://en.gravatar.com/u/spmcbride1201",
      name: "My Awesome Org"
    },
    user: {
      name: "Sean McBride",
      phone: "707-428-0670",
      avatar: gravatar.url("spmcbride1201@gmail.com", {
        s: "100",
        d: "retro"
      })
    },
    content: {
      type: "image",
      data:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Welcometofairfield.jpg/1200px-Welcometofairfield.jpg"
    }
  }
];

export default function timeline(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "SET_TIMELINE":
      return action.payload;
    default:
      return state;
  }
}
