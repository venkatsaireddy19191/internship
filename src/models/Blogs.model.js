const mongoose = require("mongoose");

const BlogsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  platform: { type: String, required: true },
  readingTime: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  cardImage: { type: String, required: true },
  contentImages: [{ type: String, required: true }],
  selectionProcess: {
    writtenTest: {
      generalStudiesMarks: { type: Number, required: true },
      aptitudeMarks: { type: Number, required: true },
      totalMarks: { type: Number, required: true },
      duration: { type: String, required: true },
    },
    interview: {
      description: { type: String, required: true },
    },
  },
  syllabus: {
    generalStudiesTopics: { type: String, required: true },
    mentalAbilityTopics: { type: String, required: true },
  },
  eligibilityCriteria: {
    nationality: { type: String, required: true },
    education: { type: String, required: true },
  },
});


const Blogs = mongoose.model("Blogs", BlogsSchema);
module.exports = Blogs;
