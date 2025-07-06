"use client";
import React, { useState, useEffect } from 'react';
import { X, Star } from 'lucide-react';

const SurveyPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenSurvey = localStorage.getItem('hasSeenSurvey');
      if (!hasSeenSurvey) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    localStorage.setItem('hasSeenSurvey', 'true');
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const handleClose = () => {
    localStorage.setItem('hasSeenSurvey', 'true');
    setIsVisible(false);
  };

  const handleStarHover = (starValue: number) => {
    setHoverRating(starValue);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[90vw]">
      <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
        <div className="bg-black p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-white font-semibold">How was your experience?</h3>
            <button
              onClick={handleClose}
              className="text-white hover:text-stone-300 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-stone-600 text-sm">
                We&apos;d love to hear about your shopping experience on our site. This would help us improve our services!
              </p>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Rate your experience:
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = star <= (hoverRating || rating);
                    return (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleStarHover(star)}
                        onMouseLeave={handleStarLeave}
                        className="focus:outline-none"
                      >
                        <Star 
                          className={`h-6 w-6 transition-colors ${
                            isFilled
                              ? 'text-yellow-400 fill-current cursor-pointer' 
                              : 'text-stone-300 cursor-pointer'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Share your thoughts (optional):
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="What did you like most? Any suggestions for improvement?"
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent text-sm"
                  rows={3}
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  disabled={rating === 0}
                  className="flex-1 px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <h4 className="text-lg font-semibold text-stone-900 mb-2">Thank you!</h4>
              <p className="text-stone-600 text-sm">
                Your feedback will help us improve our services.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyPopup;
