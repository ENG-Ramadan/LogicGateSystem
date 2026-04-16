const heading = document.querySelector('.hero h1');
const description = document.querySelector('.hero p');
const truthTable = document.querySelector('.truthTable');
const pinConfig = document.querySelector('.pinConfig');
const timingDiagram = document.querySelector('.timingDiagram');
const internalArch = document.querySelector('.internalArch');
const func = document.querySelector('.function');
const model = document.getElementById('model-viewer-container');

const sidebarLinks = document.querySelectorAll('.sidebar a');

const contentMap = {
    'AND Gate': {
        description: 'A basic logic gate that outputs true only when both inputs are true.',
        truthTable: `
            <h3>Truth Table</h3>
            <table>
                <thead><tr><th>A</th><th>B</th><th>Output</th></tr></thead>
                <tbody>
                    <tr><td>0</td><td>0</td><td>0</td></tr>
                    <tr><td>0</td><td>1</td><td>0</td></tr>
                    <tr><td>1</td><td>0</td><td>0</td></tr>
                    <tr><td>1</td><td>1</td><td>1</td></tr>
                </tbody>
            </table>`,
        pinConfig: '<p>Input A → pin 1, Input B → pin 2, Output → pin 3.</p>',
        timingDiagram: '<p>Output changes only after both inputs settle high.</p>',
        internalArch: '<p>Built from transistors or NAND gate equivalents.</p>',
        func: '<p>Function: A AND B</p>',
        model:`                    <model-viewer 
                        src="models/boolean_logic_chip.glb"
                        camera-controls
                        auto-rotate
                        style="width: 100%; height: 300px;">
                    </model-viewer>`
    },
    'NAND Gate': {
        description: 'The inverse of AND. Outputs false only when both inputs are true.',
        truthTable: `
            <h3>Truth Table</h3>
            <table>
                <thead><tr><th>A</th><th>B</th><th>Output</th></tr></thead>
                <tbody>
                    <tr><td>0</td><td>0</td><td>1</td></tr>
                    <tr><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>0</td></tr>
                </tbody>
            </table>`,
        pinConfig: '<p>Input A → pin 1, Input B → pin 2, Output → pin 3.</p>',
        timingDiagram: '<p>Output resets to 0 only when both inputs are high.</p>',
        internalArch: '<p>Often implemented using an AND gate followed by an inverter.</p>',
        func: '<p>Function: NOT (A AND B)</p>',
        model:`                    <model-viewer 
                        src="models/boolean_logic_chip.glb"
                        camera-controls
                        auto-rotate
                        style="width: 100%; height: 300px;">
                    </model-viewer>`
    },
    'OR Gate': {
        description: 'Outputs true when at least one input is true.',
        truthTable: `
            <h3>Truth Table</h3>
            <table>
                <thead><tr><th>A</th><th>B</th><th>Output</th></tr></thead>
                <tbody>
                    <tr><td>0</td><td>0</td><td>0</td></tr>
                    <tr><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>1</td></tr>
                </tbody>
            </table>`,
        pinConfig: '<p>Input A → pin 1, Input B → pin 2, Output → pin 3.</p>',
        timingDiagram: '<p>Output becomes high once any input is asserted.</p>',
        internalArch: '<p>Can be built from diodes, OR gates, or transistor arrays.</p>',
        func: '<p>Function: A OR B</p>',
        model:`                    <model-viewer 
                        src="models/boolean_logic_chip.glb"
                        camera-controls
                        auto-rotate
                        style="width: 100%; height: 300px;">
                    </model-viewer>`
    },
    'NOR Gate': {
        description: 'Outputs true only when both inputs are false.',
        truthTable: `
            <h3>Truth Table</h3>
            <table>
                <thead><tr><th>A</th><th>B</th><th>Output</th></tr></thead>
                <tbody>
                    <tr><td>0</td><td>0</td><td>1</td></tr>
                    <tr><td>0</td><td>1</td><td>0</td></tr>
                    <tr><td>1</td><td>0</td><td>0</td></tr>
                    <tr><td>1</td><td>1</td><td>0</td></tr>
                </tbody>
            </table>`,
        pinConfig: '<p>Input A → pin 1, Input B → pin 2, Output → pin 3.</p>',
        timingDiagram: '<p>Only outputs high when every input is low.</p>',
        internalArch: '<p>Often implemented as an OR gate followed by inversion.</p>',
        func: '<p>Function: NOT (A OR B)</p>',
        model:`                    <model-viewer 
                        src="models/boolean_logic_chip.glb"
                        camera-controls
                        auto-rotate
                        style="width: 100%; height: 300px;">
                    </model-viewer>`
    },
    'XOR Gate': {
        description: 'Outputs true when exactly one input is true.',
        truthTable: `
            <h3>Truth Table</h3>
            <table>
                <thead><tr><th>A</th><th>B</th><th>Output</th></tr></thead>
                <tbody>
                    <tr><td>0</td><td>0</td><td>0</td></tr>
                    <tr><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>0</td></tr>
                </tbody>
            </table>`,
        pinConfig: '<p>Input A → pin 1, Input B → pin 2, Output → pin 3.</p>',
        timingDiagram: '<p>Output toggles when exactly one input changes high.</p>',
        internalArch: '<p>Often built from a combination of AND, OR, and NOT gates.</p>',
        func: '<p>Function: A XOR B</p>',
        model:`                    <model-viewer 
                        src="models/boolean_logic_chip.glb"
                        camera-controls
                        auto-rotate
                        style="width: 100%; height: 300px;">
                    </model-viewer>`
    },
    'NOT Gate': {
        description: 'Inverts the input: 0 becomes 1, 1 becomes 0.',
        truthTable: `
            <h3>Truth Table</h3>
            <table>
                <thead><tr><th>A</th><th>Output</th></tr></thead>
                <tbody>
                    <tr><td>0</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td></tr>
                </tbody>
            </table>`,
        pinConfig: '<p>Input → pin 1, Output → pin 2.</p>',
        timingDiagram: '<p>Output is always the inverse of the input signal.</p>',
        internalArch: '<p>Implemented with a single transistor inverter or logic gate.</p>',
        func: '<p>Function: NOT A</p>',
        model:`                    <model-viewer 
                        src="models/boolean_logic_chip.glb"
                        camera-controls
                        auto-rotate
                        style="width: 100%; height: 300px;">
                    </model-viewer>`
    }
};

function getDefaultContent(title) {
    return {
        description: `Showing details for ${title}.`,
        truthTable: '<p>No detailed truth table available yet.</p>',
        pinConfig: '<p>Pin configuration information is not configured.</p>',
        timingDiagram: '<p>Timing diagram data is not available.</p>',
        internalArch: '<p>Internal architecture details are pending.</p>',
        func: `<p>Function information for ${title} will appear here.</p>`,
        model:`                    <model-viewer 
                        src="models/boolean_logic_chip.glb"
                        camera-controls
                        auto-rotate
                        style="width: 100%; height: 300px;">
                    </model-viewer>`
    };
}

sidebarLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.currentTarget.textContent.trim();
        const content = contentMap[target] || getDefaultContent(target);
        heading.textContent = target;
        if (description) {
            description.textContent = content.description;
        }
        truthTable.innerHTML = content.truthTable;
        pinConfig.innerHTML = `<h3>Pin Configuration</h3>${content.pinConfig}`;
        timingDiagram.innerHTML = `<h3>Timing Diagram</h3>${content.timingDiagram}`;
        internalArch.innerHTML = `<h3>Internal Architecture</h3>${content.internalArch}`;
        func.innerHTML = `<h3>Function</h3>${content.func}`;
        model.innerHTML = content.model;});
});

