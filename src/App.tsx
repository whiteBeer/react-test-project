import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

const HugePage = lazy(() => import('./pages/HugePage'));
const MemoPage = lazy(() => import('./pages/MemoPage'));
const AbortControllerPage = lazy(() => import('./pages/AbortControllerPage'));
const TypescriptPage = lazy(() => import('./pages/TypescriptPage'));
const ImageCropPage = lazy(() => import('./pages/ImageCropPage'));

function App() {

  return (
    <>
      <div>
        <Link to={'/'}>Home</Link>
        <hr/>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<div>
              <div className="pages">
                <Link  to={'/huge-page'}>Huge Page</Link >
                <Link  to={'/memo-page?input=aaa&page=2'}>Memo Page</Link >
                <Link  to={'/abort-controller'}>Abort Controller</Link >
                <Link  to={'/typescript-page'}>Typescript Page</Link >
                <Link  to={'/image-crop'}>ImageCrop Page</Link >
              </div>
            </div>}
          />
          <Route
            path="/huge-page"
            element={<HugePage />}
          />
          <Route
            path="/memo-page"
            element={<MemoPage/>}
          />
          <Route
            path="/abort-controller"
            element={<AbortControllerPage/>}
          />
          <Route
            path="/typescript-page"
            element={<TypescriptPage name={'Vasilii'} age={54} onClick={(arg)=> alert(arg)}/>}
          />
          <Route
            path="/image-crop"
            element={<ImageCropPage />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
