import axios from "axios";

export const getListJob = async (req, res) => {
  const page = parseInt(req.query.page) - 1 || 0;
  const limit = parseInt(req.query.limit) || 10;
  const description = req.query.description || "";
  const location = req.query.location || "";
  const type = req.query.type || "";

  try {
    const response = await axios.get(`${process.env.BASE_URL}?skip=${page * limit}&limit=${limit}&description=${description}&location=${location}&type=${type}`);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
};

export const getJobId = async (req, res) => {
    const jobId = req.params.id;
    try {
        const response = await axios.get(`${process.env.BASE_URL_ID}/${jobId}`);
      res.status(200).json(response.data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: true, message: "Internal server error" });
    }
  };
