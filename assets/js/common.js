// JavaScript Document

//加入收藏
function addFavorite(url, title) {
  try {
    window.external.addFavorite(url, title);
  } catch (e){
    try {
      window.sidebar.addPanel(title, url, '');
          } catch (e) {
      alert("请按 Ctrl+D 键添加到收藏夹", 'notice');
    }
  }
}
