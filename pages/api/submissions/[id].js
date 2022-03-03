import dbConnect from "../../../utils/dbConnect";
import Submission from "../../../models/Submission";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const submission = await Submission.findById(id);

        if (!submission) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: submission });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const submission = await Submission.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!submission) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: submission });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedSubmission = await Submission.deleteOne({ _id: id });

        if (!deletedSubmission) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
