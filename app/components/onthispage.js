"use client"
import React from 'react';

function OnThePage({ htmlContent }) {
  // Function to extract <h2> headings from the HTML content
  const extractHeadings = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const headings = Array.from(doc.querySelectorAll('h2')).map(h2 => ({
      id: h2.id,
      text: h2.textContent
    }));
    return headings;
  };

  const headings = extractHeadings(htmlContent);

  return (
    <div className='md:absolute md:top-20 md:right-28  static flex flex-col'>
      <h1 className='text-lg p-2 font-bold space-y-3'>Contents</h1>
      <ul className='text-sm space-y-3  pb-4'>
        {headings.map((heading, index) => (
          <li key={index}>
            <a className= "hover:text-blue-600" href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OnThePage;