import React from 'react';
import './ReviewWritePage.css';

const ReviewWritePage = () => {
  return (
    <div className="review-write-page">
      <div className="review-write-banner">
        <img src="/images/review/reviewwrite.png" alt="배너 이미지" />
        <div className="review-write-profile"></div>
      </div>

      <div className="review-write-wrap">
        <div className="review-write-field">
          <label>* 어떤 장소를 여행하셨나요? *</label>
          <input type="text" placeholder="장소를 입력해주세요" />
        </div>

        <div className="review-write-field">
          <label>사진 업로드</label>
          <div className="review-write-photo-list">
            <div className="review-write-photo-add">
              <img src="/images/common/p.png" alt="사진업로드" />
              <p>사진 업로드</p>
            </div>
            <div className="review-write-photo-preview"></div>
          </div>
        </div>

        <div className="review-write-field">
          <label>* 리뷰를 작성해주세요 *</label>
          <textarea placeholder="여행에 대한 솔직한 후기를 남겨주세요"></textarea>
        </div>

        <div className="review-write-btns">
          <button className="review-write-btn-cancel">취소</button>
          <button className="review-write-btn-submit">글 등록</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewWritePage;
