import React, { useEffect } from 'react';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'faq' | 'breadcrumb' | 'mobileApp';
  data?: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "What-If",
          "url": "https://what-if.uz",
          "logo": "https://what-if.uz/final-transparent.png",
          "description": "AI-powered app that reveals your patterns and helps you build better habits through predictive insights.",
          "foundingDate": "2024",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "url": "https://what-if.uz"
          },
          "sameAs": [
            "https://what-if.uz"
          ]
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "What-If",
          "url": "https://what-if.uz",
          "description": "AI-powered self-awareness app that predicts your next move and helps you build better habits.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://what-if.uz/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'mobileApp':
        return {
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          "name": "What-If",
          "operatingSystem": ["ANDROID", "IOS"],
          "applicationCategory": "LifestyleApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1247"
          },
          "description": "AI-powered app that reveals your patterns and helps you build better habits. Track activities, predict your next move with 90% accuracy, and gain self-awareness."
        };

      case 'faq':
        return data ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        } : null;

      case 'breadcrumb':
        return data ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        } : null;

      default:
        return null;
    }
  };

  useEffect(() => {
    const schema = getSchema();
    if (!schema) return;

    const scriptId = `structured-data-${type}`;
    
    // Remove existing script if present
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Add new script
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
};
