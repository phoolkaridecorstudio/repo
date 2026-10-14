import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';
import { blogsData } from '../../data/blogs';

// 1. Generate Static Params for all known blog posts at build time
export function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: 'Post Not Found | Phoolkari Decor Studio' };
  }

  return {
    title: `${post.title} | Phoolkari Decor Studio Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `https://www.phoolkaridecorstudio.in${post.image}` }],
    },
    alternates: {
      canonical: `https://www.phoolkaridecorstudio.in/blog/${post.slug}`,
    }
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // 3. Generate BlogPosting JSON-LD Schema for Google
  const postUrl = `https://www.phoolkaridecorstudio.in/blog/${post.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: `https://www.phoolkaridecorstudio.in${post.image}`,
    url: postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Phoolkari Decor Studio',
      url: 'https://www.phoolkaridecorstudio.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.phoolkaridecorstudio.in/images/logo.png',
      },
    },
    datePublished: new Date(post.date).toISOString(),
    description: post.excerpt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
