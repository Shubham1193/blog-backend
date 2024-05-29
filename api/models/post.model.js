import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },

    
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;


// In the context of a database, a slug is not a widely used term. It typically refers to a concept used in URLs. However, there might be a couple of ways the term "slug" could be related to a database:

// Custom Field for User-Friendly URLs:

// Some database designs might include a custom field named "slug" for certain models. This field would store a human-readable identifier derived from another field, like the title or name.

// For instance, a blog post model might have a "title" field and a "slug" field. The "slug" field could contain a shortened, URL-friendly version of the title, like "my-blog-post-title" instead of "My Blog Post Title - A Long and Detailed Explanation."

// This approach is beneficial for creating SEO-friendly URLs that are easier for humans to read and remember compared to database-generated identifiers.