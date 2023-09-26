declare namespace PixiMixins
{
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Container extends Partial<import('./accessibilityTarget').AccessibleTarget>
    {

    }

    interface RendererSystems
    {
        accessibility: import('./AccessibilitySystem').AccessibilitySystem;
    }
}
