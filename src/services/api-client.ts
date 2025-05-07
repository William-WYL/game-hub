import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f03d378938204dcb811f966fb5eb5839'
  }
});