import React, { Suspense, useState } from 'react';

const ComputedOne = React.lazy(() => import('components/ComputedOne'));
const ComputedTwo = React.lazy(() => import('components/ComputedTwo'));

const App = () => {
    const [showTwo, setShowTwo] = useState<boolean>(false);

    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <ComputedOne a={1} b={2} />
                {showTwo && <ComputedTwo a={3} b={4} />}
                <button type="button" onClick={() => setShowTwo(true)}>
                    显示Two
                </button>
            </Suspense>
        </div>
    );
};

export default App;
