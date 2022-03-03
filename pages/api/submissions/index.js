import dbConnect from "../../../utils/dbConnect";
import Submission from "../../../models/Submission";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const submissions = await Submission.find({});
        res.status(200).json({ success: true, data: submissions });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const submission = await Submission.create(req.body);

        res.status(201).json({ success: true, data: submission });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
