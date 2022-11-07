

// DB에 이미지가 없을시 보여주기 위한 박스
function NoImage() {
  return (
    <div style={{ width: '245px', height: '320px', backgroundColor: 'FFD369'}}>
      <img src="/images/Logo.png" alt="Logo"/>
    </div>
  );
}

export default NoImage;