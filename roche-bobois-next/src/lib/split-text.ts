"use client";

export interface SplitTextResult {
  words: HTMLSpanElement[];
  revert: () => void;
}

export function splitTextIntoWords(element: HTMLElement): SplitTextResult {
  const originalHTML = element.innerHTML;
  const text = element.textContent || '';
  const words = text.split(/\s+/).filter(Boolean);

  element.innerHTML = '';

  const wordSpans: HTMLSpanElement[] = [];

  words.forEach((word, index) => {
    const wrapper = document.createElement('span');
    wrapper.style.display = 'inline-block';
    wrapper.style.overflow = 'hidden';
    wrapper.style.verticalAlign = 'top';

    const span = document.createElement('span');
    span.textContent = word;
    span.style.display = 'inline-block';
    span.style.willChange = 'transform, opacity';

    wrapper.appendChild(span);
    element.appendChild(wrapper);

    if (index < words.length - 1) {
      const space = document.createTextNode('\u00A0');
      element.appendChild(space);
    }

    wordSpans.push(span);
  });

  return {
    words: wordSpans,
    revert: () => {
      element.innerHTML = originalHTML;
    },
  };
}
