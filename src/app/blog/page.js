import BlogClient from './BlogClient';

export const metadata = {
  title: 'Event Decor & Planning Blog | Phoolkari Decor Studio',
  description: 'Read the latest trends, tips, and insights on luxury event decoration, wedding planning, and floral designs from Amritsar\'s top decorators.',
  alternates: {
    canonical: 'https://phoolkaridecorstudio.in/blog',
  }
};

export default function BlogIndex() {
  return <BlogClient />;
}
