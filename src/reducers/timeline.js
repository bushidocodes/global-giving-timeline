import gravatar from "gravatar";

export const ADD_ITEM = "ADD_ITEM";
export const SET_TIMELINE = "SET_TIMELINE";

const mockData = [
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
    timestamp: 1511812939,
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
    timestamp: 1511813939,
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
    timestamp: 1511814939,
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
  },
  {
    timestamp: 1511815939,
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
      type: "audio",
      data:
        "http://www.wavsource.com/snds_2017-09-17_1751672946049674/animals/dog_puppy.wav"
    }
  },
  {
    timestamp: 1511818939,
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
      type: "video",
      data: "https://www.youtube.com/watch?v=ndsaoMFz9J4"
    }
  }
];
const initialState = [];

export default function timeline(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case SET_TIMELINE:
      return action.payload;
    default:
      return state;
  }
}
